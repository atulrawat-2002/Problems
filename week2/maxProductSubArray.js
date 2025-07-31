/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length;
    if(n === 1){
        return nums[0];
    }

    let ans = Number.MIN_SAFE_INTEGER;
    let leftSum = 1;
    let rightSum = 1;

    for(let i = 0; i < n; i++){

        if(leftSum === 0) leftSum = 1;
        if(rightSum === 0) rightSum = 1;

        leftSum *= nums[i];
        rightSum *= nums[n - 1 -i];

        ans = Math.max(ans, Math.max(leftSum, rightSum));
    }

    return ans;
};