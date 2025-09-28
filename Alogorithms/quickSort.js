let arr = [3, 9, 6, 5, 4, 8, 1, 7, 2];

function swap(a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function partition(low, upp) {
  let start = low, end = upp;
  let pivot = low;
  while (start < end) {
    do start++ ; while(start <= upp && arr[start] <= arr[pivot]) 
        do end-- ; while(end >= low && arr[end] > arr[pivot]);

    if(start < end) swap(start ,end);
  }
    swap(pivot, end);
return end;

}

function quickSort(low, upp) {
  if (low < upp) {
    let pos = partition(low, upp);
    quickSort(low, pos);
    quickSort(pos + 1, upp);
  }
}



console.log(arr);
arr.push(Infinity)
quickSort(0, arr.length - 1);
console.log(arr)