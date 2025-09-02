// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    subarrayXor(arr, k) {
        // your code here
        let ans = 0;
        let map = new Map();
        let total = 0;
        for(let i = 0; i < arr.length; i++) {
            total ^= arr[i];
            if(total === k) ans++;
            if(map.has(total ^ k)) {
                ans += map.get(total ^ k);
            } 
            map.set(total, ( map.get(total) || 0) + 1);
        }
        return ans;
    }
}