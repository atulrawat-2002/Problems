
class Solution {
    boundaryTraversal(root) {
        // code here
        function isLeaf(root) {
            if(!root) return;
            return !root.left && !root.right;
        }
        
        function leaves(root) {
            if(!root) return;
            if(isLeaf(root)) {
                ans.push(root.data);
                return ;
            }
            
            leaves(root.left);
            leaves(root.right);
        }
        
        function lefts(root) {
            if(!root || isLeaf(root)) return;
            
            ans.push(root.data);
            
            if(root.left) lefts(root.left);
            else if(root.right) lefts(root.right);
        }
        
        function rights(root) {
            if(!root) return ;
            
            if(root.right) rights(root.right);
            else if(root.left) rights(root.left);
            
            if(root && !isLeaf(root)) ans.push(root.data);
        }
        
        let ans = []
        if(!root) return ans;
        
        if(!isLeaf(root)) ans.push(root.data);
        
        lefts(root.left);
        leaves(root);
        rights(root.right);
        
        return ans;
        
    }
}

/****************************** Boundary traversal using MORRIS TRAVERSAL ***************************** */



class Solution {
    boundaryTraversal(root) {
        // code here
        function isLeaf(root) {
            return !root.left && !root.right;
        }
        
        function getPred(node) {
            let temp = node.left;
            while(temp.right && temp.right != node) {
                temp = temp.right;
            }
            return temp;
        }
        
        function lefts(node) {
            if(node === null) return;
            
            let temp = node;
            
            while(!isLeaf(temp)) {
                ans.push(temp.data);
                
                if(temp.left) temp = temp.left;
                else if(temp.right) temp = temp.right;
            }
        }
        
        function rights(node) {
            if(node === null) return;
            let temp = node;
            let cur = [];
            
            while(!isLeaf(temp)) {
                cur.push(temp.data);
                
                if(temp.right) temp = temp.right;
                else if(temp.left) temp = temp.left;
            }
            
            ans.push(...cur.reverse());
        }
        
        function leaves(node) {
            let cur = node;
            
            while(cur) {
                if(cur.left === null) {
                    if(cur.right === null)
                        ans.push(cur.data);
                        
                    cur = cur.right;
                } else {
                    let pred = getPred(cur);
                    
                    if(pred.right === null) {
                        pred.right = cur;
                        cur = cur.left;
                    } else {
                        if(pred.left === null) 
                            ans.push(pred.data);
                            
                        pred.right = null;
                        cur = cur.right;
                    }
                }
            }
        }
        
        let ans = [];
        
        if(!isLeaf(root)) ans.push(root.data);
        
        lefts(root.left);
        
        leaves(root);
        
        rights(root.right);
        
        return ans;
        
    }
}





 