// let arr = Array(5).fill(4);
let arr = [4, 3, 5, 1, 0, 2, -3, 8, 9, -2];

function swap(a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function partition(low, upp) {
  let i = low;
  let j = upp;
  let p = low;

  while (i < j) {
    do i++;
    while (arr[i] <= arr[p]);
    do j--;
    while (arr[j] > arr[p]);

    if (i < j) swap(i, j);
  }
    swap(p, j);
    return j;
    
}

function quickSort(low, upp) {
  if (low < upp) {
    let pos = partition(low, upp);
    quickSort(low, pos);
    quickSort(pos + 1, upp);
  }
}

console.log(arr);
arr.push(Infinity);
quickSort(0, arr.length - 1);
console.log(arr);


/*******************************  NOTES  ****************** */

/*
 
If we use Infinity or the maximum value at the end of the array, we can prevent the array from going to end.
if use this version of algorithm 
let i = low;
  let j = upp;
  let p = low;

  while (i < j) {
    do i++;
    while (arr[i] <= arr[p]);
    do j--;
    while (arr[j] > arr[p]);

    if (i < j) swap(i, j);
  }
    swap(p, j);
    return j;
 

    and we need to exclude the positio returned form the partition function while calling the recursion like this 

    function quickSort(low, upp) {
  if (low < upp) {
    let pos = partition(low, upp);
    quickSort(low, pos);
    quickSort(pos + 1, upp);
  }
}



AND IF DO NOT USE INFINITY AND WRITE THE ALGORITHM IN DEFFERENT MANNER IT WILL WORK FINE FOR OTHER CASES BUT WIL GOT INTO THE 
INFINITE RECURSION BECAUSE WE WILL CALL THE SAME RECURSION AGAIN AND AGIAN, LIKE THIS

 while (i < j) {
    while(i <= high && a[i] <= p);
    while(j >= low && a[j] > p);
    
    if(i < j) swap(a[i], a[j]);
  }
    

  swap(p, a[j]);
  return j;



  AND WHILE CALLING THE RECURSION WE HAVE TO INCLUDE THE VALUE OF RETURNED INDEX AGAIN, LIKE THIS


       function quickSort(low, upp) {
  if (low < upp) {
    let pos = partition(low, upp);
    quickSort(low, pos - 1);
    quickSort(pos + 1, upp);
  }
}

 IN THIS CASE AND WE CAN ALSO CHOOSE THE STARTING ELEMENT AS THE PIVOT AS WELL 



    */