/************************************ TOP DOWN RECURSION ********************************* */

function height(root) {
    if (!root) return 0;

    return Math.max(height(root.left), height(root.right)) + 1;
}
var isBalanced = function (root) {
    if (!root) return true;

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
};
