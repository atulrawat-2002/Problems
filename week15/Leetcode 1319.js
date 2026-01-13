/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

function findParent(u, parent) {
    if (u == parent[u]) return u;

    parent[u] = findParent(parent[u], parent);
    return parent[u]
}

function findUnion(u, v, parent, rank) {

    let pv = findParent(v, parent);
    let pu = findParent(u, parent);

    if (pv != pu) {
        if (rank[pv] < rank[pu]) {
            parent[pv] = pu;
        } else if (rank[pu] < rank[pv]) {
            parent[pu] = pv;
        } else {
            parent[pv] = pu;
            rank[pu]++;
        }
    }
}

var makeConnected = function(n, connections) {

    if((n - 1) > connections.length) return -1;

    let parent = [];
    let rank = Array(n).fill(0);

    for (let i = 0; i < n; i++){
        parent.push(i);
    }

    for (let [u, v] of connections) {
        if (findParent(u, parent) != findParent(v, parent)) {
            findUnion(u, v, parent, rank);
        }
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (findParent(i, parent) == i) {
            count++
        }
    }   

    return count - 1

};