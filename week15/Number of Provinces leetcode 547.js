
function dfs(node, vis, isConnected, n) {
    vis[node] = true;

    // Check for neighbour 
    for (let nei = 0; nei < n; nei++) {
        if (isConnected[node][nei] && !vis[nei]) {
            dfs(nei, vis, isConnected, n);
        }
    }
}

var findCircleNum = function(isConnected) {
    let n = isConnected.length;
    let vis = Array(n).fill(false);
    let ans = 0;

    for (let start = 0; start < n; start++) {
        if (!vis[start]) {
            ans++;
            dfs(start, vis, isConnected, n)
        }
    }

    return ans;

};