/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums.length < 2){
        return;
    }
    if(k > nums.length){
        while(k > nums.length){
        k = k - nums.length;
        }
    }
  function reverse(nums, start, end){
      while(start < end) {
          let x = nums[start];
          nums[start++] = nums[end];
          nums[end--] = x;
      }
  }  

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k , nums.length - 1)
};