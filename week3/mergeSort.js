

const merge = (arr, low, high, mid) => {
    let i = low;
    let j = mid + 1;
    let newArr = [];

    while(i <= mid && j <= high) {
        if(arr[i] <= arr[j]){
            newArr.push(arr[i])
            i++;
        } else {
            newArr.push(arr[j])
            j++;
        }
    }

    if(i <= mid) {
        while(i <= mid) {
            newArr.push(arr[i])
            i++;
        }
    }
    if(j <= high) {
        while(j <= high) {
            newArr.push(arr[j]);
                j++;
        }
    } 

    return newArr;

}

function mergeSort (arr, low, high) {

    if(low === high) return;

    let mid = Math.floor((low + high) / 2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid + 1, high)

    arr = merge(arr, low, high, mid);

return arr;    

}        
//   0 1 2 3 4 5 
let arr = [1,3,5,2,2,6];

arr = mergeSort(arr, 0, 5)

console.log(arr);
