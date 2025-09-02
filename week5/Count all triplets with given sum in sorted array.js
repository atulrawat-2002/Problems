
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    countTriplets(arr, target) {
        // code here
        let n = arr.length;
        let ans = 0;
        for(let i = 0; i < n - 2; i++) {
            let left = i + 1;
            let right = n - 1;
            while(left < right) {
            let sum = arr[i] + arr[left] + arr[right];
                if(sum === target) {
                    ans++;
                    let temp = left + 1;
                    while(temp < right && arr[temp] === arr[temp - 1]) {
                        ans++;
                        temp++;
                    }
                    right--;
                }
                else if(sum > target) right--;
                else left++;
            }
        }
        return ans;
    }
}