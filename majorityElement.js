/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let pivot = -1;
    let count = 0;
    let pivotCount = 0;
    for(value of nums){
        if(count === 0){
            pivot = value;
            count = 1;
        }
        else if(value != pivot){
            count--;
        }
        else{
            count++;
        }
    }
    for(value of nums){
        if(value === pivot){
            pivotCount++;
        }
    }
    if(pivotCount > nums.length / 2){
        return pivot;
    }
    
};