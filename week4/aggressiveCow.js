/**
 * @param {number[]} stalls
 * @param {number} k
 * @returns {number}
 */
function canWePlace (stalls, dist, cows) {
    let last = stalls[0];
    let cntCows = 1;
    for(let i = 1; i < stalls.length; i++) {
        if(stalls[i] - last >= dist) {
            last = stalls[i];
            cntCows++;
        } 
        if(cntCows >= cows) return true;
    }
    
    return false;
}
class Solution {
    aggressiveCows(stalls, k) {
        // code here
        stalls = stalls.sort((a, b) => a - b);
        
        let n = stalls.length;
        
        let low = 1;
        let high = stalls[n - 1] - stalls[0];
        
        while(low <= high) {
            let mid = Math.floor( (low + high)/2 );
            
            if( canWePlace(stalls, mid, k) === true ) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        return high;
    }
}