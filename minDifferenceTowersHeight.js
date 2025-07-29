/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
    getMinDiff(arr, k) {
        // code here
        arr.sort((a, b) => a - b);
        let n = arr.length;
        let ans = arr[n - 1] - arr[0];
        let mn = 0;
        let mx = 0;
        for(let i = 1; i < n; i++){
            
            if(arr[i] - k < 0) continue;
            mn = Math.min(arr[0] + k, arr[i] - k);
            mx = Math.max(arr[n - 1] - k, arr[i - 1] + k);
            
            ans = Math.min(ans, mx - mn);
        }
        
        return ans;
    }
}