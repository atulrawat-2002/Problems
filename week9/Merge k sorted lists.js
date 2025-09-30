/************************** USING ARRAY AND IN BUILT SORTING ********************* */

class Solution {
    mergeKLists(arr) {
        // code here
        let arrOfListValues = []
        
        for(let head of arr) {
            while(head) {
                arrOfListValues.push(head.data);
                head = head.next;
            }
        }
        
        arrOfListValues = arrOfListValues.sort((a, b) => a - b);
        
        
        let head = null;
        let prev = null;
        
        for(let value of arrOfListValues) {
            let node = new Node(value);
            if(head === null) {
                head = node;
                prev = node;
            } else {
                prev.next = node;
                prev = node;
            }
        }
        
        return head;
    }
}
