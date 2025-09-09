/**
 * @param {Node} head
 * @param {number} k
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    reverseKGroup(head, k) {
        // code here
        function reverse(head) {
            let prev = null;
            let current = head;
            while(current != null) {
                let next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            return;
        }
        
        let temp = head;
        let kth = head;
        let prev = head
        let next = null;
        while(temp != null) {
            let count = 1
            
            while(count < k && kth.next) {
                kth = kth.next;
                count++;
            }
            
            next = kth.next;
            kth.next = null;
            reverse(temp);
            if(temp === head) head = kth;
            else prev.next = kth;
            
            prev = temp;
            temp = next;
            kth = temp;
            
        } 
        return head;
    }
}


