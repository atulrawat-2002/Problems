
   function maxProduct(arr) {
        // code here
        // 2 -5 -2 -4 3
        // -1 2 -3 4 -5
        if(arr.length === 1){
            return arr[0];
        }
        
        let n = arr.length;
        let i = 1, j = 0;
        let product = arr[0];
        let mxProduct = Number.MIN_SAFE_INTEGER;
        let ans = arr[0];
        
        while(i < n - 1){
            product *= arr[i++];
            if(product === 0){
                while(j < n - 1){
                    if(mxProduct < 0){
                        mxProduct /= arr[j];
                        if(mxProduct >= 0){
                            break;
                        }
                    }
                    j++;
                }
            }  
            ans = Math.max(mxProduct, product);
            mxProduct = product;
        }
        
        console.log(ans, product)
        
    }

    maxProduct([2, 3, 4])