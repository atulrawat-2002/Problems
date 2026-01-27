var shortestPathLength = function(graph) {
    const n = graph.length;
    const finalMask = (1 << n) - 1;

    const visited = Array.from({ length: n }, () =>
        Array(1 << n).fill(false)
    );

    const queue = [];

    for (let i = 0; i < n; i++) {
        const mask = 1 << i;
        queue.push([i, mask]);
        visited[i][mask] = true;
    }

    let steps = 0;

    while (queue.length) {  
        let size = queue.length;

        while (size--) {
            const [node, mask] = queue.shift();

            if (mask === finalMask) return steps;

            for (const nei of graph[node]) {
                const newMask = mask | (1 << nei);

                if (!visited[nei][newMask]) {
                    visited[nei][newMask] = true;
                    queue.push([nei, newMask]);
                }
            }
        }
        steps++;
    }

    return 0;
};