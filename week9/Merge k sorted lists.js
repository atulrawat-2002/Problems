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


/***************************** USING MIN HEAP ******************************** */


var mergeKLists = function(arr) {
        const parentNode = (index) => Math.floor( (index - 1)/2 );
        const leftChild = (index) => index * 2 + 1;
        const rightChild = (index) => index * 2 + 2;
        const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
        
        let heap = arr.filter(node => node !== null);
        
        
        function heapifyDown (index) {
            while(index * 2 + 1 < heap.length) {
                let left = leftChild(index);
                let right = rightChild(index);
                let smallest = index;
                
                if(left < heap.length && heap[left].val < heap[smallest].val) {
                    smallest = left;
                }
                if(right < heap.length && heap[right].val < heap[smallest].val) {
                    smallest = right;
                }
                
                if(smallest != index) {
                    swap(heap, index, smallest);
                    index = smallest;
                } else return;
            }
        }
        
        function getMin () {
            if(!heap.length || heap[0] === null) return null;
            let node = heap[0];
            
            if(node.next === null) {
                heap[0] = heap[heap.length - 1];
                heap.pop();
                heapifyDown(0);
                return node;
            }
            if(node.next != null) {
                heap[0] = node.next;
                heapifyDown(0);
                return node;
            }

        }
        
        for(let i = Math.floor( heap.length / 2 ); i >= 0; i--) {
            heapifyDown(i);
        }
        
        let newHead = getMin();
        let prev = newHead;
        
        while(prev) {
            let node = getMin();
            prev.next = node;
            prev = node;
        }
        
        return newHead;
};