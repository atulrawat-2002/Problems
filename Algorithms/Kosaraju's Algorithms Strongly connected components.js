function dfs(node, adj, vis, st) {
        vis[node] = true;
        for (let nei of adj[node]) {
            if (!vis[nei]) {
                dfs(nei, adj, vis, st);
            }
        }
        if (st) st.push(node);
    }

function findTopo(adj) {
    let n = adj.length;
    let vis = Array(n).fill(false);
    let st = []
    
    for (let start = 0; start < n; start++) {
        if(!vis[start]) {
            dfs(start, adj, vis, st)
        }
    }
    
    return st;
}

class Solution {
    kosaraju(adj) {
        // code here
        let n = adj.length;
        let ans = 0
        let rev = Array.from({length: n}, () => []);
        let st = []
        let topo = findTopo(adj);
        
        for (let i = 0; i < n; i++) {
            for (let v of adj[i]){
                rev[v].push(i);
            }
        }
        
        let vis = Array(n).fill(false);
        while(topo.length) {
            let node = topo.pop();
            if(!vis[node]) {
                ans++;
                dfs(node, rev, vis);
            }
        }
        
        return ans;
    }
}