const nextPermutation = function (nums) {
    let index = -1;
    // 1 1 5 1
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        let start = 0;
        let end = nums.length - 1;
        while (start < end) {
            let x = nums[start];
            nums[start++] = nums[end];
            nums[end--] = x;
        }
        return;
    }
    for (let i = index - 1; i > index; i--) {
        if(nums[i] > nums[index]){
            [nums[i], nums[index]] = [nums[index], nums[i]];
        }
    }
    let first = index + 1;
    let last = nums.length - 1;
    while (first < last) {
        let x = nums[first];
        nums[first++] = nums[last];
        nums[last--] = x;
    }
};
let arr = [1,3, 2]

nextPermutation(arr)
console.log(arr)