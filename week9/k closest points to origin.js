/************************** USING MAX HEAP *********************** */

class Solution {
    
    kClosest(points, k) {
        // Your code here
        
        let heap = [];
        for(let i = 0; i < k; i++) {
            heap.push(points[i]);
        }
        
        const dist = ([x, y]) => x*x + y*y;
        
        const parentNode = (index) => Math.floor( (index - 1) / 2 );
        
        const leftChild = (index) => index * 2 + 1;
        
        const rightChild = (index) => index * 2 + 2;
        
        const swap = (i, j) => [heap[i], heap[j]] = [heap[j], heap[i]];
        
        function heapifyUp (index) {
            
            while(index > 0) {
                let parent = parentNode(index);
                if(dist(heap[parent]) < dist(heap[index])) {
                swap(parent, index);
                index = parent;
                } else break;
            }
        }
        
        function heapifyDown (index) {
    
            while(index * 2 + 1 < heap.length) {
                let left = leftChild(index);
                let right = rightChild(index);
                let largest = index;  
                
                if(left < heap.length && dist(heap[left]) > dist(heap[largest])) {
                    largest = left;
                }
                if(right < heap.length && dist(heap[right]) > dist(heap[largest])) {
                    largest = right;
                }
                
                if(largest != index) {
                    swap(index, largest);
                    index = largest;
                } else return;
            }
    }
    
    for(let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
        heapifyDown(i);
    }
    
    for(let i = k; i < points.length; i++ ){
        if(dist(heap[0]) > dist(points[i])) {
            heap[0] = points[i];
            heapifyDown(0);
        }
    }
    
    return heap;
    
}

}