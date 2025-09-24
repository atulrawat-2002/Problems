
var serialize = function (root) {
    if (!root) return "#";

    let arr = [];
    let q = [root];

    while (q.length) {
        let node = q.shift();
        if (node) {
            arr.push(node.val);
            q.push(node.left || null);
            q.push(node.right || null);
        } else arr.push("#");
    }

    return arr.join(",");
    return arr.toString();

};

var deserialize = function (data) {
    if (data.length === 0 || !data || data === "#") return null;

    data = data.split(",")
    let q = [];
    let i = 1;
    let value = parseInt((data[0]));
    let root = new TreeNode(value)
    q.push(root);

    while (i < data.length && q.length) {
        let cur = q.shift();

        let leftval = data[i++];
        if (leftval != '#' && leftval != "") {
            leftval = parseInt(leftval);
            let node = new TreeNode(leftval);
            cur.left = node;
            q.push(node)
        }

        if(i > data.length) break;
        let rightVal = data[i++];
        if (rightVal != '#' && rightVal != "") {
            rightVal = parseInt(rightVal);
            let node = new TreeNode(rightVal);
            cur.right = node;
            q.push(node);
        }
    }

    return root;
};
