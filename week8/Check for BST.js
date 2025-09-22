/********************************* USING INORDER TRAVERSAL AND ARRAY **************************** */
var isValidBST = function(root) {
    let ans = [];
     function getInorder (root) {
    if(root === null) return;

    getInorder(root.left);
    ans.push(root.val);
    getInorder(root.right)
 }
    getInorder(root);

    for(let i = 1; i < ans.length; i++) {
        if(ans[i - 1] >= ans[i] ) return false;
    }

    return true;
};


/******************************** USING MIN AND MAX RANGES *********************** */

function check(root, min, max ) {
    if(root === null) return true;

    if(root.val < min || root.val > max) return false;

    return check(root.left, min, root.val - 1) && 
           check(root.right, root.val + 1, max )
}
var isValidBST = function(root) {

    return check(root, -Infinity, Infinity);
};


/******************************** CHECKING BST USING INORDER TRAVERSAL AND O(1) SPACE********************** */


class Solution {
    // Function to check whether a Binary Tree is BST or not.
    isBST(root) {
        // your code here
        function inorder (root) {
            if(root === null) return true;
            
            if(!inorder(root.left)) return false;
            
            if(prev >= root.data) return false;
            
            prev = root.data;
            
            return inorder(root.right);
        }
        let prev = -Infinity;
        return inorder(root);
    }
}