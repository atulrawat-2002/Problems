
class Solution {
    boundaryTraversal(root) {
        // code here
        function isLeaf(root) {
            if(!root) return;
            return !root.left && !root.right;
        }
        
        function leaves(root) {
            if(!root) return;
            if(isLeaf(root)) {
                ans.push(root.data);
                return ;
            }
            
            leaves(root.left);
            leaves(root.right);
        }
        
        function lefts(root) {
            if(!root || isLeaf(root)) return;
            
            ans.push(root.data);
            
            if(root.left) lefts(root.left);
            else if(root.right) lefts(root.right);
        }
        
        function rights(root) {
            if(!root) return ;
            
            if(root.right) rights(root.right);
            else if(root.left) rights(root.left);
            
            if(root && !isLeaf(root)) ans.push(root.data);
        }
        
        let ans = []
        if(!root) return ans;
        
        if(!isLeaf(root)) ans.push(root.data);
        
        lefts(root.left);
        leaves(root);
        rights(root.right);
        
        return ans;
        
    }
}










