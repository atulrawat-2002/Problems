class MaxHeap {
  arr;
  size;
  constructor() {
    this.arr = new Array(100);
    this.arr[0] = -1;
    this.size = 0;
  }

  insert(x) {
    this.size++;

    let index = this.size;
    this.arr[index] = x;

    while (index > 1) {
      let parent = Math.floor(index / 2);
      if (this.arr[parent] < this.arr[index]) {
        [this.arr[parent], this.arr[index]] = [
          this.arr[index],
          this.arr[parent],
        ];
        index = parent;
      } else return;
    }
  }

  print() {
    for (let i = 1; i <= this.size; i++) {
      process.stdout.write(this.arr[i] + " ");
    }
  }

  deleteRoot() {
    if (this.size === 0) {console.log("no elements"); return ;}
    ;

    this.arr[1] = this.arr[this.size];
    this.size--;

    let index = 1;

    while (index * 2 <= this.size) {
      let leftChild = 2 * index;
      let rightChild = 2 * index + 1;
      let largest = index;

      if (leftChild <= this.size && this.arr[index] < this.arr[leftChild]) {
        largest = leftChild;
      }
      if (rightChild <= this.size && this.arr[index] < this.arr[rightChild]) {
        largest = rightChild;
      }

      if (largest != index) {
        [this.arr[index], this.arr[largest]] = [
          this.arr[largest],
          this.arr[index],
        ];
        index = largest;
      } else break;
    }
  }

  
}

let h = new MaxHeap();

h.insert(55);
h.insert(49);
h.insert(50);
h.insert(51);
h.insert(58);

h.deleteRoot();

h.deleteRoot();

// h.deleteRoot();
// h.deleteRoot();
// h.deleteRoot();
h.deleteRoot();
h.print();
