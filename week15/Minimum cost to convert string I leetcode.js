/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {

    let mat = Array.from({length: 26}, () => Array(26).fill(Infinity));
    let n = cost.length;

    for (let i = 0; i < n; i++) {
        let u = original[i].charCodeAt(0) - 97;
        let v = changed[i].charCodeAt(0) - 97;

        mat[u][v] = Math.min(mat[u][v], cost[i]);
    }
    

    for (let k = 0; k < 26; k++) {
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < 26; j++) {
                if (mat[i][k] != Infinity && mat[k][j] != Infinity){
                mat[i][j] = Math.min(mat[i][j], mat[i][k] + mat[k][j])
                }
            }
        }
    }
    
    n = source.length;
    let ans = 0

    for (let i = 0; i < n; i++ ) {
        let u = source[i].charCodeAt(0) - 97;
        let v = target[i].charCodeAt(0) - 97;

        if (source[i] === target[i]) continue;

        if (mat[u][v] === Infinity) return -1

        ans += mat[u][v]

    }

    return ans;

};