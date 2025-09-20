
var pathSum = function(root, k) {
    let ans = 0;
    let map = new Map();
    map.set(0, 1);

    function find (root, sum) {
        if(root === null) return;

        sum = sum + root.val;
        
        if(map.has(sum - k)) ans += map.get(sum - k);

        map.set(sum, (map.get(sum) || 0) + 1);

        find(root.left, sum);
        find(root.right, sum);

        map.set(sum, map.get(sum) - 1);

    }

    find(root, 0)

    return ans;
};