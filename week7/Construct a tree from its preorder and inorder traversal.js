/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    let index = 0;
    let n = preorder.length;
    let start = 0;
    let end = n - 1;
    let valueToIndex = new Map();
    for(let i = 0; i < n; i++) {
        valueToIndex.set(inorder[i], i)
    }
    function solve(start, end) {
        if (index >= n || start > end) {
            return null;
        }
        let element = preorder[index++];
        let position = valueToIndex.get(element);
        let temp = new TreeNode(element);

        temp.left = solve(start, position - 1);
        temp.right = solve(position + 1, end);

        return temp;
    }

    return solve(start, end);
};






