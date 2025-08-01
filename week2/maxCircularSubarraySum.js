/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(arr) {
    
        let n = arr.length;
        if(n === 1){
            console.log(arr[0]);
        }
        
        let total = 0;
        
        for(let i of arr){
            total += i;
        }
        
        let max = total;
        let i = 0;
        // [10, -3, -4, 7, 6, 5, -4, -1]
        while(i < n){
            let currMax = total;
            let j;
            if(i === 0 ) j = n -1;
            else j = i - 1;
            
            while(j != i){
                if(arr[j] < 0){
                    if(i === 3){
                        console.log(currMax, arr[j], j)
                    }
                    currMax = currMax - arr[j];
                    j--;
                    if(j < 0){
                        j = n -1;
                    }
                }
                else break;
            }
            currMax = Math.max(arr[i], currMax);
            max = Math.max(currMax, max);
             i++;
        }
       console.log(max);
};

maxSubarraySumCircular([1])