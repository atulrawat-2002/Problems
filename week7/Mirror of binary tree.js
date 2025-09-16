
class Solution {
    /**
     * @param {Node} node
     * @return {void}
     */
    // Function to convert a binary tree into its mirror tree.
    mirror(node) {
        // your code here
        function getMirror(root) {
            if(root === null) return;
            
            getMirror(root.left);
            getMirror(root.right);
            
            [root.right, root.left] = [root.left, root.right];
        }
        
        getMirror(node);
    }
}


