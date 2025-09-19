
class Solution {
    // Function to return maximum path sum from any node in a tree.
    findMaxSum(root) {
        // your code here
        function getMaxSum (root) {
            if(!root) return 0;
            
            let leftSum = Math.max(0, getMaxSum(root.left));
            let rightSum = Math.max(0, getMaxSum(root.right));
            
            maxSum = Math.max(maxSum, leftSum + rightSum + root.data);
            
            return root.data + Math.max(leftSum, rightSum);
        }
        
        let maxSum = -Infinity;
        
        getMaxSum (root);
        
        return maxSum;
    }
}







