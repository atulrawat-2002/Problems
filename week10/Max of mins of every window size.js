/************************** EXTREAM BRUTE FORCE ********************* */

function findMax() {
  let n = arr.length;
  let ans = [];

   for (let k = 1; k <= n; k++) {
    
        let maxOfMin = -Infinity;

        // Traverse through all windows of current size k
        for (let i = 0; i <= n - k; i++) {
        
            // Find minimum of current window
            let minVal = arr[i];
            for (let j = 1; j < k; j++) {
                minVal = Math.min(minVal, arr[i + j]);
            }

            // Update maxOfMin if required
            maxOfMin = Math.max(maxOfMin, minVal);
        }

        // Store max of min for current window size
        ans.push(maxOfMin)
    }
  console.log(ans);
}

/************************ USING DEQUEUE ************************** */


class Solution {
    maxOfMins(arr) {
        // code here
        let n = arr.length;
        let ans = [];
        
        for(let k = 1; k <= n; k++) {
            let dq = [];
            let curMin = [];
            let maxi = -Infinity;
            
            
            for(let i = 0; i < k; i++) {
                
                while(dq.length && arr[i] <= arr[dq[dq.length - 1]]) {
                    dq.pop();
                }
                dq.push(i);
                
            }
            
            maxi = Math.max(maxi, arr[dq[0]]);
            
            for(let i = k; i < n; i++) {
                
                while(dq.length && dq[0] <= i - k) {
                    dq.shift();
                }
                
                while(dq.length && arr[i] <= arr[dq[dq.length - 1]]) {
                    dq.pop();
                }
                
                dq.push(i);
                
                maxi = Math.max(maxi, arr[dq[0]]);
            }
            
            
            ans.push(maxi);
            
        }
        
        return ans;
        
    }
}

/******************************* USING NEXT SMALLER AND PREVIOUS SMALLER AND RANGE *************************** */


class Solution {
    maxOfMins(arr) {
        // code here
        let n = arr.length;
        let ans = new Array(n).fill(0);
        let stack = [];
        
        for(let i = 0; i < n; i++) {
            
            while(stack.length && arr[i] < arr[stack[stack.length - 1]]) {
                let index = stack.pop();
                let right = i;
                if(stack.length) {
                    let left = stack[stack.length - 1];
                    let range = right - left - 1;
                    ans[range - 1] = Math.max(ans[range - 1], arr[index]);
                } else {
                    let range = right;
                    ans[range - 1] = Math.max(ans[range - 1], arr[index]);
                }
            }
            
            stack.push(i);
            
        }
        
        while(stack.length) {
            let index = stack.pop();
            let right = n;
            if(stack.length) {
                let left = stack[stack.length - 1];
                let range = right - left - 1;
                ans[range - 1] = Math.max(ans[range - 1], arr[index]);
            } else {
                let range = n;
                ans[range - 1] = Math.max(ans[range - 1], arr[index]);
            }
        }
        
        for(let i = n - 2; i >= 0; i--) {
            ans[i] = Math.max(ans[i], ans[i + 1]);
        }
        
        return ans;
        
    }
}



