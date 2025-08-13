/**
 * @param {number[][]} arr
 * @returns {number[][]}
 */

class Solution {
    mergeOverlap(arr) {
        // code here
        let i = 0;
        let temp = [];
        
        arr = arr.sort( (a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0] );
        
        while( i < arr.length ) {
            let start = arr[i][0];
            let end = arr[i][1];
            let j = i + 1;
            
            while( j < arr.length && arr[j][0] <= end) {
                    end = Math.max( end, arr[j][1] );
                    j++;
            }
            
            temp.push([start, end]);
            i = j;
        }
        
        return temp;
        
    }
}