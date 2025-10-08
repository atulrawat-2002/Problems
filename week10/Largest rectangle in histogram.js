/*************************** USING LEFT AND RIGHT SMALLER VALUES ARRAY ****************************** */


class Solution {
    getMaxArea(arr) {
        // code here
        let n = arr.length;
        let stack = [];
        let right = new Array(n).fill(n);
        let left = new Array(n).fill(-1);
        
        for(let i = 0; i < n; i++) {
            while(stack.length && arr[stack[stack.length - 1]] >= arr[i] ){
                stack.pop();
            }
            if(stack.length) {
                left[i] = stack[stack.length - 1];
            }
            stack.push(i);
        }
        
        while(stack.length) stack.pop();
        
        for(let i = n - 1; i >= 0; i--) {
            while(stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }
            if(stack.length) {
                right[i] = stack[stack.length - 1];
            }
            stack.push(i);
        }
        
        let maxArea = 0;
        
        for(let i = 0; i < n; i++) {
            let area = arr[i] * ( right[i] - left[i] - 1 );
            maxArea = Math.max(area, maxArea);
        }
        
        return maxArea;
    }
}


/********************** CALCULATING LEFT SMALLER ON THE FLY ****************/


class Solution {
    getMaxArea(arr) {
        // code here
        let n = arr.length;
        let stack = [];
        let right = new Array(n).fill(n);
        
        
        for(let i = n - 1; i >= 0; i--) {
            while(stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }
            if(stack.length) {
                right[i] = stack[stack.length - 1];
            }
            stack.push(i);
        }
        
        while(stack.length) stack.pop();
        let maxArea = 0;
        
        for(let i = 0; i < n; i++) {
            let area = 0;
            while(stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }
            if(stack.length) {
                area = arr[i] * ( right[i] - stack[stack.length - 1] - 1 );
            } else {
                area = arr[i] * ( right[i] - (-1) - 1 );
            }
            stack.push(i);
            maxArea = Math.max(area, maxArea);
        }
        
        return maxArea;
    }
}





