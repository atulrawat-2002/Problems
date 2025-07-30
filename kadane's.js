
   function maxSubarraySum(arr) {
        // Code here
        
        let mx = Number.MIN_SAFE_INTEGER;
        let sum = 0;
        
        for(let i of arr){
            sum += i;
            if(mx < sum){
                mx = sum;
            }
        sum = Math.max(sum, 0);   
        }
        
        
        return mx;
        
    }
console.log(maxSubarraySum([-1, -2, -3, -4]))