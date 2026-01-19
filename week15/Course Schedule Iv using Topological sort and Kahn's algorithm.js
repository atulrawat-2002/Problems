var checkIfPrerequisite = function(numCourses, prerequisites, queries) {

    let inDeg = Array(numCourses).fill(0);
    let adj = Array.from({ length: numCourses }, () => []);
    let q = [];
    let pre = Array.from({ length: numCourses }, () => new Set());
    let result = [];

    // build graph
    for (let [u, v] of prerequisites) {
        inDeg[v]++;
        adj[u].push(v);
    }

    // init queue
    for (let i = 0; i < numCourses; i++) {
        if (inDeg[i] === 0) {
            q.push(i);   // 
        }
    }

    // kahn's algorithm
    while (q.length) {
        let node = q.shift();

        for (let nei of adj[node]) {
            // node is prerequisite of nei
            pre[nei].add(node);

            // inherit all prerequisites of node
            for (let x of pre[node]) {
                pre[nei].add(x);
            }

            inDeg[nei]--;
            if (inDeg[nei] === 0) q.push(nei);
        }
    }

    // answer queries
    for (let [u, v] of queries) {
        result.push(pre[v].has(u));   // ✅ correct direction
    }

    return result;
};
