/****************************** BRUTE FORCE **************** */

var nextGreaterElements = function(nums) {
    let n = nums.length;
    let ans = new Array(n).fill(-1);

    for(let i = 0; i < n; i++) {
        for(let j = 1; j < n; j++) {
            let next = nums[ (i + j) % n ];
            if(next > nums[i]) {
                ans[i] = next;
                break;
            }
        }
    }

    return ans;
};

/************************ TWO PASSES ***********************/

var nextGreaterElements = function(nums) {
    let n = nums.length;
    let ans = new Array(n).fill(-1);
    let stack = [];

    for (let i = 0; i < 2 * n; i++) {
        let cur = nums[i % n];
        while (stack.length && nums[stack[stack.length - 1]] < cur) {
            let top = stack.pop();
            ans[top] = cur;
        }
        if (i < n) stack.push(i);
    }

    return ans;
};
