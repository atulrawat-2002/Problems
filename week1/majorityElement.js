var majorityElement = function (nums) {
    if (nums.length < 2) {
        return nums;
    }
    let map = new Map();
    res = [];
    for (value of nums) {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1);
        }
        else {
            map.set(value, 1);
        }
    }
    for ([key, value] of map) {
        if (value > nums.length / 3) {
            res.push(key);
        }
    }
    console.log(res)
    return res;

};
majorityElement([2, 2]);