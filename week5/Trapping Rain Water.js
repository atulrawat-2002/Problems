// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the trapped water between the blocks.
    maxWater(arr) {
        // code here
        let ans = 0;
        let n = arr.length;
        
        let lMax = arr[0];
        let rMax = arr[n - 1];
        
        let left = 1;
        let right = n - 2;
        
        while(left <= right) {
            if(rMax > lMax) {
                let water = Math.max(0, lMax - arr[left]);
                ans += water;
                lMax = Math.max(lMax, arr[left]);
                left++;
            } else {
                let water = Math.max(0, rMax - arr[right]);
                ans += water;
                rMax = Math.max(rMax, arr[right]);
                right--;
            }
        }
        return ans;
    }
}