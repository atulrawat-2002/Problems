let arr = Array(100000).fill(7);

function swap(a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function partition(low, upp) {
  let start = low, end = upp;
  let pivot = arr[low];
  while(start < end) {
    while(start <= upp && arr[start] < pivot) start++; 
    while(end >= low && arr[end] > pivot) end--;

    if(start < end) swap(start, end);
  }
  swap(low, end);

  return end;

}

function quickSort(low, upp) {
  if (low < upp) {
    let pos = partition(low, upp);
    quickSort(low, pos - 1);
    quickSort(pos + 1, upp);
  }
}



console.log(arr);
quickSort(0, arr.length - 1);
console.log(arr)