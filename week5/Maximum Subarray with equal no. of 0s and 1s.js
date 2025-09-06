/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
    maxLen(arr) {
        // code here
        let n = arr.length;
        let ans = 0;
        let map = new Map();
        let preSum = 0;
        
        for(let i = 0; i < n; i++) {
            preSum += arr[i] === 0 ? -1 : 1;
            
            if(preSum === 0) ans = i + 1;
            
            if(map.has(preSum)) {
                ans = Math.max(ans, i - map.get(preSum));
            } else map.set(preSum, i);
        }
        return ans;
    }
}