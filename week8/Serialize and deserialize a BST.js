
var serialize = function(root) {
   if(root === null) return "";
   let arr = [];

   function preorder(root) {
    if(root === null) return null;

    arr.push(root.val);
    preorder(root.left);
    preorder(root.right);

   }

   preorder(root); 

   return arr.join(",");
};


var deserialize = function(data) {
    if(data.length === 0) return null;

    data = data.split(",")
    let i = 0;

    function build(min, max) {
        if(i >= data.length) return null;
        let val = parseInt(data[i]);

        if(val > min && val < max) {
            i++;
            let node = new TreeNode(val);

            node.left = build(min, val);
            node.right = build(val, max);
            return node;
        } 
         return null;
    }

    return build(-Infinity, Infinity);

};

