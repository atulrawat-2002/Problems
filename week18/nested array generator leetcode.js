
var inorderTraversal = function*(arr) {
    for (let val of arr) {
        if (Array.isArray(val)) {
            yield *inorderTraversal(val);
        } else {
            yield val;
        }
    }
};
