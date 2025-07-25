// User function Template for javascript

    // Function to rotate an array by d elements in counter-clockwise direction.
   function rotateArr(arr, d) {
        if(arr.length < 2){
            return;
        }
        // code here
        /*d = 2
         0 1 2 3 4 
        [1 2 3 4 5]
        [5 4 3 2 1]
        [3 4 5 1 2]*/
        if(d > arr.length){
            while(d > arr.length){
                d = d - arr.length;
            }
        }
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

let arr = [1, 2];

rotateArr(arr, 7)
console.log(arr)