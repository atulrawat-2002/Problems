/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    let n = numCourses;
    let mat = Array.from({length: n}, () => Array(n).fill(false));
    let ans = [];

    for (let [u, v] of prerequisites) {
        mat[u][v] = true;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                mat[i][j] = mat[i][j] || (mat[i][k] && mat[k][j]);

            }
        }
    }
    
    for (let [u, v] of queries) {
        ans.push(mat[u][v])
    }

    return ans;
    
};