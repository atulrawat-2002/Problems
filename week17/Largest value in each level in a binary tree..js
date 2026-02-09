
class Solution {
    largestValues(root) {
        // code here
        let q = [];
        let ans = [];
        
        if (root === null) return ans;
        
        q.push(root);
        let idx = 0
        
        while(idx < q.length) {
            let size = q.length - idx;
            let maxi = -Infinity;
            for (let i = 0; i < size; i++) {
                let node = q[idx++];
                maxi = Math.max(maxi, node.data);
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
            ans.push(maxi);
        }
        
        return ans;
    }
}