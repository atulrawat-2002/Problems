
var nextGreaterElement = function(nums1, nums2) {
    let stack = [0];
    let ans = new Array(nums1.length).fill(-1);
    let map = new Map();

    for(let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], i);
    }

    for(let i = 1; i < nums2.length; i++) {
        let cur = nums2[i];
        while(stack.length && nums2[stack[stack.length - 1]] < cur) {
            let top = stack.pop();
            if(map.has(nums2[top])) ans[map.get(nums2[top])] = cur;
        }
        stack.push(i);
    }

    return ans;
};