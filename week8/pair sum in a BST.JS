
class Solution {
    findTarget(root, target) {
        
        let next_stack = [];
        let before_stack = [];
        
        function pushAll(node, flag) {
            if(flag === 'next') {
                while(node) {
                    next_stack.push(node) 
                    node = node.left;
                }
            } else {
                while(node) {
                    before_stack.push(node);
                    node = node.right;
                }
            }
        }
        
        function next () {
            let node = next_stack.pop();
            if(node.right) pushAll(node.right, 'next');
            return node.data;
        }
        
        function before() {
            let node = before_stack.pop();
            if(node.left) pushAll(node.left, "before");
            return node.data;
        }
        
        pushAll(root, 'next');
        pushAll(root, 'before');
        
        let nextValue = next();
        let beforeValue = before();
        
        while(nextValue < beforeValue) { 
            
            if(nextValue + beforeValue > target) {
                beforeValue = before();
            } else if(nextValue + beforeValue < target) {
                nextValue = next();
            } else {
                return true;
            }
        }
        
        return false;
        
    }
}
