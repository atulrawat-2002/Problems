
class Solution {
    calculateSpan(arr) {
        // code here
        let n = arr.length;
        let ans = new Array(n).fill(1);
        let stack = [];
        
        for(let i = 0; i < n; i++) {
            
            while(stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
                stack.pop();
            }
            
            if(stack.length === 0) {
                ans[i] = (i + 1);
            } else {
                ans[i] = (i - stack[stack.length - 1])
            }
            
            stack.push(i);
        }
        
        return ans;
    }
}