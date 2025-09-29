
var findKthLargest = function(nums, k) {
    k = nums.length - k;
    const getRandom = (low, high) => low + Math.floor( Math.random() * (high - low + 1) );

    const swap = (i, j) => [nums[i], nums[j]] = [nums[j], nums[i]];

    function partition(low, high) {
        let pivotIndex = getRandom(low, high);
        let pivot = nums[pivotIndex];

        let less = low;
        let equal = low;
        let greater = high;

        while(equal <= greater) {
           if( nums[equal] < pivot)  {
                swap(less, equal);
                less++;
                equal++;
            }
           else if( nums[equal] === pivot) {
                equal++;
           }
           else {
                swap(equal, greater);
                greater--;
           }
        }

        return [less, greater];
    }

    function quickSelect (low, high) {
        
        while(low < high) {
            let [less, greater] = partition(low, high)
            if( k < less) high = less - 1;
            else if(k > greater) low = greater + 1;
            else return nums[greater];
        }
        return nums[low];
    }

    return quickSelect(0, nums.length - 1);

};