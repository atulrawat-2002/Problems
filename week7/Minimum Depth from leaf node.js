/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function height(root) {
    if (!root) return 0;
    if(!root.left) {
        if(root.right) return height(root.right) + 1;
    }
    if(!root.right) {
        if(root.left) return height(root.left) + 1;
    }

    let lHeight = height(root.left);
    let rHeight = height(root.right);

    return Math.min(lHeight, rHeight) + 1;
}
var minDepth = function (root) {
    if (!root) return 0;
    

    return height(root);
};