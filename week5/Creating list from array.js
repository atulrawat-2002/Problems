/**
 * class Node{
 *     constructor(data){
 *         this.data = data;
 *         this.next = null;
 *     }
 * }
 */

class Solution {
    arrayToList(arr) {
        // code here
        if(arr.length === 0) return null;
        let head = new Node(arr[0]);
        let mover = head;
        for(let i = 1; i < arr.length; i++) {
            
            mover.next = new Node(arr[i]);
            mover = mover.next;
        }
        
        return head;
    }
}