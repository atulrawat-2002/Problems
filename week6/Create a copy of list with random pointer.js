/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
        // code here
        if(!head) return head;
        let temp = head;
        
        while(temp) {
            let newNode = new _Node(temp.val);
            newNode.next = temp.next;
            temp.next = newNode;
            temp = temp.next.next;
        }
        
        let newTemp = head.next; 
        temp = head;
        
        while(temp) {
           newTemp.random = temp.random ? temp.random.next : null;
           
           temp = newTemp.next;
           newTemp = temp ? temp.next : null;
        } 
        
        let newHead = head.next;
        temp = head, newTemp = temp.next;
        
        while(temp) {
            temp.next = newTemp.next;
            newTemp.next = temp.next ? temp.next.next : null;
            
            temp = temp.next;
            newTemp = temp ? temp.next : null;
        }
        
        
        return newHead;
};