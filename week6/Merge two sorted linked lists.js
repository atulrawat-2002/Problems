/*
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}
*/

/**
 * @param {Node} head1
 * @param {Node} head2
 * @return {Node}
 */
/************************************** Recursive Approach  ************************************************** */
class Solution {
    sortedMerge(head1, head2) {
        // code here
        function mergeList(current, first, second) {
            if( !first || !second ) {
                if(first === null) current.next = second;
                else current.next = first;
                return;
            }
            
            if(first.data < second.data) {
                current.next = first;
                current = first;
                first = first.next;
            } else {
                current.next = second;
                current = second;
                second = second.next;
            }
            mergeList(current, first, second);
            return;
        }
        
        let current, first, second, newHead;
        
        if(head1.data < head2.data) {
            current = head1;
            first = head1.next;
            second = head2;
        } else {
            current = head2;
            first = head2.next;
            second = head1;
        }
        
        newHead = current;
        
        mergeList(current, first, second);
        
        
        
        return newHead;
    }
}






