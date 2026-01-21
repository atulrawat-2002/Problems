function dfs(node, adj, vis) {
    vis[node] = true;
    
    for (let nei of adj[node]) {
        if (!vis[nei]) {
            dfs(nei, adj, vis)
        }
    }
}

class Solution {

    isEulerCircuit(V, adj) {
        let inDeg = Array(V).fill(0);
        let vis = Array(V).fill(false);
        
        // calculae indegree of all verteces
        for (let i = 0; i < V; i++) {
            for (let v of adj[i]) {
                inDeg[v]++;
            }
        }
        
        let count = 0;
        
        // if inedgree of all verteces are zero or count how many verteces have odd indgree
        for (let i = 0; i < V; i++) {
            if ((inDeg[i]) % 2 === 0) {
                continue;
            } else {
                count++;
                if (count > 2) {
                    return 0
                }
            }
        }
        
        
        // Call the dfs from any non zero indegree vertex
        for (let i = 0; i < V; i++) {
            if(inDeg[i] != 0) {
                dfs(i, adj, vis);
                break;  
            }
        }
        
        // If all non zero indegree verteeces are not visited then returnn 0
        for (let i = 0; i  < V; i++) {
            if (inDeg[i] != 0 && !vis[i]) {
                return 0
            }
        }
        
        if(count === 1) return 0;
        if (count === 0) return 2;
        
        return 1;
        
    }
}