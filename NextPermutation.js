
    function nextPermutation(arr) {
        // code here
        let pivot = -1;
        
        function reverse(arr, start, end){
            while(start < end){
                let x = arr[start];
                arr[start++] = arr[end];
                arr[end--] = x;
            }
        }
        for(let i = arr.length - 2; i >= 0; i--){
            if(arr[i] < arr[i + 1]){
                pivot = i;
                break;
            }
        }
        if(pivot == -1){
            reverse(arr, 0, arr.length-1);
            return;
        }
        // 1, 2, 4, 6, 5, 3
        for(let i = arr.length - 1; i > pivot; i--){
            if(arr[i] > arr[pivot]){
                [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
                break;
            }
        }
        reverse(arr, pivot + 1, arr.length - 1);
    }


    arr = [1, 2, 3, 6, 5, 4];
    nextPermutation(arr)
    console.log(arr)