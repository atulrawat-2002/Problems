const bubbleSort = (arr) => {
    let i = 0;
    let swapped = false;
    let n = arr.length;

    do {
        swapped = false;
        for(let i = 0; i < n - 1; i++){
            if(arr[i] > arr[i + 1]) {
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
                swapped = true;
            }
        }
        n--;
    } while(swapped)

    return arr;
}
console.log(bubbleSort([4, 2, 3, 1, 5]));
