/**************************** USING INORDER TRAVERSAL ***************** */
class Solution {
    correctBST(root) {
        // your code here
        let prev = null;
        
        let first = null;
        let second = null;
        
        function inorder(root) {
            if(root === null) return;
            
            inorder(root.left);
            
            if(prev != null) {
                if(root.data < prev.data) {
                if(first === null) {
                    first = prev;
                    second = root;
                } else second = root;
            }
            }
            
            prev = root;
            
            inorder(root.right)
        }
        
        
        inorder(root);
        
        let temp = first.data;
        first.data = second.data;
        second.data = temp;
    }
}



/**************************************** USING MORRIS TRAVERSAL ********************************** */

class Solution {
    correctBST(root) {
        // your code here
        let prev = null;
        
        let first = null;
        let second = null;
        let cur = root;
        
        function getPred(node) {
            let temp = node.left;
            while(temp.right && temp.right != node) {
                temp = temp.right;
            }
            return temp;
        }
        
        function process(cur) {
            if(prev != null) {
                if(cur.data < prev.data) {
                    if(first === null) {
                        first = prev;
                        second = cur;;
                    } else second = cur;
                }
            }
        }
        
        
        while(cur) {
            if(cur.left === null) {
                process(cur);
                prev = cur;
                cur = cur.right;
            } else {
                let pred = getPred(cur);
                if(pred.right === null) {
                    pred.right = cur;
                    cur = cur.left;
                } else {
                    process(cur);
                    pred.right = null;
                    prev = cur;
                    cur = cur.right;
                }
            }
        }
        
        
        let temp = first.data;
        first.data = second.data;
        second.data = temp;
    }
}




