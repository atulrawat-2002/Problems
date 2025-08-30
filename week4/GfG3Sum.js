// User function Template for javascript
class Solution {
    /**
     * @param {number[]} arr
     * @return {number[][]}
     */
    findTriplets(arr) {
        // write your code here
        let n = arr.length;
        let ans = [];
        let exist = new Set();
        for(let i = 0; i < n - 2; i++) {
        let map = new Map();
            for(let j = i + 1; j < n; j++) {
                let required = - (arr[i] + arr[j]);
                if(map.has(required)) {
                    for(let k of map.get(required)) {
                    if(i < k && k < j) {
                    let temp = [i, k, j];
                    let key = temp.toString();
                    if(!exist.has(key)) {
                        ans.push(temp);
                        exist.add(key)
                    }
                    }
                    }
                }
                if(!map.has(arr[j])) map.set(arr[j], [])
                map.get(arr[j]).push(j)
            }
        }
        return ans;
    }
}