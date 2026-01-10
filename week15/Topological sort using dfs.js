/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {number[]}
 */

class Solution {
    topoSort(V, edges) {
        
        let vis = Array(V).fill(false);
        let st = [];
        let adj = [];
        
        for (let i = 0; i < V; i++) {
            adj.push([]);
        }
        
        for (let [u, v] of edges) {
            adj[u].push(v)
        }
        
        for (let i = 0; i < V; i++) {
            if (!vis[i]) {
             topo(i)   
            }
        }
        
        function topo(node) {
            
            vis[node] = true
            
            for (let nei of adj[node]) {
                if(!vis[nei]) topo(nei)
            }
            
            st.push(node)
        }
        
        let ans = [];
        
        while(st.length) {
            let node = st.pop();
            ans.push(node);
        }
        
        return ans;
        
    }
}