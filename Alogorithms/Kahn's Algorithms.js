/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {number[]}
 */

class Solution {
    topoSort(V, edges) {
        
        let q = [];
        let ans = [];
        
        // FIRST build the adjacency list
        let adj = Array.from({length: V}, () => [])
        for (let [u, v] of edges) {
            adj[u].push(v)
        }
        
        // find the indegree of all verteces
        let inDeg = Array(V).fill(0);
        for (let i = 0; i < V; i++) {
            for (let ver of adj[i]) {
                inDeg[ver]++;
            }
        }
        
        // push all the verteces in the queue with 0 in degree
        for (let ver = 0; ver < inDeg.length; ver++) {
            if(inDeg[ver] == 0) {
                q.push(ver)
            }
        }
        
        // loop through the queue
        while(q.length) {
            let node = q.pop();
            ans.push(node)
            for (let nei of adj[node]) {
                inDeg[nei]--
                if (inDeg[nei] == 0) {
                    q.push(nei)
                }
            }
        }
        
        return ans;
        
    }
}



