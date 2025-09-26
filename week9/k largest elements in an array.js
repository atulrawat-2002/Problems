
class Solution {
    kLargest(arr, k) {
        // Your code here
        let heap = [];
        
        function parent(index) { return Math.floor((index - 1) / 2) }
        
        function left(index) { return index * 2 + 1 }
        
        function right(index) { return index * 2 + 2 }
        
        function swap (first, second) {
            [heap[first], heap[second]] = [heap[second], heap[first]];
        }
        
        
        function heapifyDown(index) {
            
            let smallest = index;
            
            let leftChild = left(index);
            let rightChild = right(index);
            
            if(leftChild < heap.length && heap[leftChild] < heap[smallest]) {
                smallest = leftChild;
            }
            if(rightChild < heap.length && heap[rightChild] < heap[smallest]) {
                smallest = rightChild;
            }
            
            if(smallest != index) {
                swap(smallest, index);
                heapifyDown(smallest);
            } else return;
            
        }
        
        function heapifyUp(val,) {
            heap.push(val)
            let index = heap.length - 1;
            while(index > 0) {
            let parentNode = parent(index);
                if(heap[parentNode] > heap[index]) {
                swap(parentNode, index);
                index = parentNode;
                } else return;
            }
            
        }
        
        for(let i = 0; i < k; i++) {
            heapifyUp(arr[i]);
        }
        
        for(let i = k; i < arr.length; i++) {
            if(heap[0] < arr[i]) {
                heap[0] = arr[i];
                heapifyDown(0);
            }
        }
        let res = [];
        
        while(heap.length) {
            if(heap.length === 1) {
                res.push(heap.pop())
                return res.reverse();
            }
            res.push(heap[0]);
            heap[0] = heap.pop();
            heapifyDown(0);
        }
        
    }
}



