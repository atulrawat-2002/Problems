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