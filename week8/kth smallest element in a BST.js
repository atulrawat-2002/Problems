
function getPred (node) {
    let temp = node.left;
    while(temp.right && temp.right != node) {
        temp = temp.right;
    }
    return temp;
} 

var kthSmallest = function(root, k) {
    let count = 0
    let cur = root;

    if(root === null) return -1;

    while(cur) {
        if(cur.left === null) {
            count++;
            if(count === k) return cur.val;
            cur = cur.right;
        } else {
            let pred = getPred(cur);
            if(pred.right === null) {
                pred.right = cur;
                cur = cur.left;
            } else {
                count++
                if(count === k) return cur.val;
                pred.right = null;
                cur = cur.right;
            }
        }
    }

    return -1;
};