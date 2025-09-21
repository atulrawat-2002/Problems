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