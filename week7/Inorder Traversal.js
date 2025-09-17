
var inorderTraversal = function(root) {
    let ans = [];
    let st = [];
    let cur = root;

    while(st.length || cur) {
        while(cur) {
            st.push(cur);
            cur = cur.left;
        }
        cur = st.pop();
        ans.push(cur.val);
        cur = cur.right;
    }

    return ans;
};