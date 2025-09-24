
var lowestCommonAncestor = function(root, p, q) {
    let cur = root; 
    
    while(cur) {
        if(cur.val > p.val && cur.val > q.val) {
            cur = cur.left;
        } else if(cur.val < p.val && cur.val < q.val) {
            cur = cur.right;
        } else return cur;
    }

};