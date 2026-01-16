function dfs(node, path, vis, cycle, adj) {
    vis[node] = true;
    path[node] = true;
    cycle[node] = false;

    for (let nei of adj[node]) {
        if (path[nei]) return true;
        if (vis[nei]) continue;
        else {
            if (dfs(nei, path, vis, cycle, adj)) return true;
        }
    }
    path[node] = false;
    cycle[node] = true;
    return false;
}

var eventualSafeNodes = function(graph) {
    let V = graph.length;
    let cycle = Array(V).fill(false);
    let vis = Array(V).fill(false);
    let path = Array(V).fill(false);
    let ans = [];

    for (let i = 0; i < V; i++) {
        if (!vis[i]) {
            dfs(i, path, vis, cycle, graph)
        }
    }

    for (let i = 0; i < V; i++) {
        if (cycle[i]) ans.push(i);
    }

    return ans;

};