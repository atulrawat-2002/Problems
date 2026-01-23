function findTopo(adj, n) {
    let vis = Array(n).fill(false);
    let inDeg = Array(n).fill(0);
    let q = [];
    let topo = [];

    for (let i = 0; i < n; i++) {
        for (let item of adj[i]) {
            inDeg[item]++;
        }
    }

    for (let i = 0; i < n; i++) {
        if (inDeg[i] === 0) q.push(i);
    }

    let idx = 0;
    while (idx < q.length) {
        let node = q[idx++];
        vis[node] = true;
        topo.push(node)

        for (let nei of adj[node]) {
            inDeg[nei]--;
            if (inDeg[nei] === 0) q.push(nei)
        }
    }


    if (topo.length != n) return [];
    return topo;

}


var sortItems = function (n, m, group, beforeItems) {

    let itemOrder = Array.from({ length: n }, () => []);

    for (let i = 0; i < n; i++) {
        if (group[i] === -1) {
            group[i] = m++;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let item of beforeItems[i]) {
            itemOrder[item].push(i);
        }
    }

    let groupLen = Math.max(...group) + 1;
    let groupOrder = Array.from({ length: groupLen }, () => []);

    for (let i = 0; i < n; i++) {
        if (beforeItems[i].length === 0) continue;

        let currentGroup = group[i];

        for (let item of beforeItems[i]) {
            let prevGroup = group[item];
            if (currentGroup === prevGroup) continue;
            groupOrder[prevGroup].push(currentGroup);
        }

    }

    let ItemsTopo = findTopo(itemOrder, n);
    let groupTopo = findTopo(groupOrder, groupLen);

    if (ItemsTopo.length === 0 || groupTopo.length === 0) {
        return [];
    }

    let groupOfItems = new Map();

    for (let item of ItemsTopo) {
        let groupItem = group[item];
        if (groupOfItems.has(groupItem)) {
            groupOfItems.get(groupItem).push(item);
        } else {
            groupOfItems.set(groupItem, [item]);
        }
    }

    let ans = [];
    for (let item of groupTopo) {
        if (groupOfItems.has(item)) {
            ans.push(...groupOfItems.get(item));
        }
    }

    return ans;

};