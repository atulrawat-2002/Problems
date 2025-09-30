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


/****************************** USING QUICK SELECT AND THREE WAY PARTITIONING ****************************** */


var kClosest = function (points, k) {

        k = k - 1;
        
        const getRandom = (l, h) => l + Math.floor( Math.random() * (h - l + 1) );
        
        const dist = ([x, y]) => x * x + y * y;
        
        const swap = (i, j) => [points[i], points[j]] = [points[j], points[i]];
        
        function partition (low, high) {
            let pivotIndex = getRandom(low, high);
            let pivot = points[pivotIndex];
            let less = low, equal = low, greater = high;
            
            while(equal <= greater) {
                if( dist(points[equal]) < dist(pivot) ) {
                    swap(equal, less);
                    equal++, less++;
                } 
                else if( dist(points[equal]) === dist(pivot) ) equal++;
                else {
                    swap( greater, equal );
                    greater--;
                }
            }
            
            return [less, greater];
        }
        
        function quickSelect (low, high) {
            while(low < high) {
                let [start, end] = partition(low, high);
                if(k < start) high = start - 1;
                else if(k > end) low = end  + 1;
                else return;    
            }
        }
        
        quickSelect(0, points.length - 1);
        
        return points.slice(0, k + 1);

};