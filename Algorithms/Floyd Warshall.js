
class Solution {

    floydWarshall(dist) {
        // code here
        let n = dist.length
        let MAX = 10 ** 8
        
        for(let k = 0; k < n; k++) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if( dist[i][k] ==  MAX || dist[k][j] == MAX) {
                        continue
                    }
                    dist[i][j] = Math.min( dist[i][j], dist[i][k] + dist[k][j] )
                }
            } 
        }
    }
}