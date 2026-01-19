
function dfs(node, path, vis, edges, count) {
    vis[node] = true;
    path[node] = true;

    let res = 0;
    let nei = edges[node];

    if (nei !== -1) {
        if (path[nei]) {
            res = count[node] - count[nei] + 1;
        } else if (!vis[nei]) {
            count[nei] = count[node] + 1;
            res = dfs(nei, path, vis, edges, count);
        }
    }

    path[node] = false;   
    return res;
}


var longestCycle = function(edges) {
    let ans = 0;
    let n = edges.length;
    let vis = Array(n).fill(false);
    let path = Array(n).fill(false);
    let count = Array(n).fill(1)

    for (let start = 0; start < n; start++) {
        if (!vis[start]) {
            count[start] = 1;
            ans = Math.max(ans, dfs(start, path, vis, edges, count) )
        }
    }

    return ans ? ans : -1;

};