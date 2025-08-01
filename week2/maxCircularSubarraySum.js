
        // code here
        let minSum = arr[0];
        let maxSum = arr[0];
        
        let curMin = arr[0];
        let curMax = arr[0];
        
        let total = arr[0];
        
        for(let i = 1; i < arr.length; i++){
            let val = arr[i];
            total += val;
            
            curMax = Math.max(val, curMax + val);
            maxSum = Math.max(maxSum, curMax);
            
            curMin = Math.min(val, curMin + val);
            minSum = Math.min(minSum, curMin);
        }
      
      if(maxSum < 0) return maxSum;
      
      return Math.max(maxSum, total - minSum);