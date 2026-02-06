
var minRemoval = function(nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let ans = 0
    let i = 0

    for (let j = 0; j < n; j++) {
        while(nums[j] > nums[i] * k) i++;

        ans = Math.max(ans, (j - i + 1));
    }

    return n - ans;
}; 