function firstmissingPositive(nums){
    let n = nums.length;

    let i = 0;

    while(i < n) {
        if(nums[i] <= n && nums[i] > 0){
            let position = nums[i] - 1;
            if(nums[position] != nums[i]){
                [nums[i], nums[position]] = [nums[position], nums[i]];
            }
        }
        else i++;
    }

    for(let i = 0; i < n; i++){
        if(nums[i] != i + 1) return i + 1;
    }

    return n + 1;
}





// class Solution {
// public:
//     int firstMissingPositive(vector<int>& nums) {
//         int n = nums.size();
//         int i = 0;

//         while (i < n) {
//             if (nums[i] > 0 && nums[i] <= n) {
//                 int correctPosition = nums[i] - 1;
//                 if (nums[i] != nums[correctPosition]) {
//                     swap(nums[i], nums[correctPosition]);
//                     continue; // recheck the new nums[i] in same iteration
//                 }
//             }
//             i++;
//         }

//         for (int i = 0; i < n; i++) {
//             if (nums[i] != i + 1) return i + 1;
//         }

//         return n + 1;
//     }
// };
