
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