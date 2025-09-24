
var lowestCommonAncestor = function(root, p, q) {
    if(root === null) return null;

    if(root === p || root === q) return root;

    let leftLCA = lowestCommonAncestor(root.left, p, q);
    let rightLCA = lowestCommonAncestor(root.right, p, q);

    if(leftLCA && rightLCA) return root;

    if(leftLCA === null) return rightLCA;

    else return leftLCA;
};