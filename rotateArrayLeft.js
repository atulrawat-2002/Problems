// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} d
 */

class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    rotateArr(arr, d) {
        // code here
        /*d = 2
         0 1 2 3 4 
        [1 2 3 4 5]
        [5 4 3 2 1]
        [3 4 5 1 2]*/
        function reverse(arr, start, end){
            while(start < end){
                let x = arr[start];
                arr[start++] = arr[end];
                arr[end--] = x;
            }
        }
        reverse(arr, 0, arr.length - 1);
        // reverse(arr, 0, (arr.length - d) - 1);
        reverse(arr, 0, arr.length - d - 1);
        reverse(arr, arr.length - d, arr.length - 1);
        // reverse(arr, arr.length - d , arr.length);
    }
}