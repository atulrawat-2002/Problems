class Heap {
  arr;
  size;
  constructor() {
    this.arr[0] = -1;
    this.size = 0;
  }
}

function heapify(arr, size, index) {
  if (index < 1 || size === 0 || !arr.length) return;


    let largest = index;
    let leftChild = 2 * index;
    let rightChild = 2 * index + 1;

    if(leftChild <= size && arr[leftChild] > arr[largest]) {
        largest = leftChild;
    }
    if(rightChild <= size && arr[rightChild] > arr[largest]) {
        largest = rightChild;
    }

    if(largest != index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapify(arr, size, largest)
    } else return;

}


let arr = [-1, 1, 2, 3, 4, 5];

let n = arr.length;

for(let i = 1; i < n; i++) {
    process.stdout.write(arr[i] + " ");
}
console.log("\n");

for(let i = Math.floor(n / 2); i > 0; i--) {
    heapify(arr, n - 1, i);
}

for(let i = 1; i < n; i++) {
    process.stdout.write(arr[i] + " ");
}