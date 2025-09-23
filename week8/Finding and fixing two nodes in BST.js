/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @returns {void}
 */

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