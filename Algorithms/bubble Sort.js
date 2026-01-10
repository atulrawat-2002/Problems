let arr = [5, 3, 4, 0, 2, 1, 6, 8, 7];


function bubbleSort() {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log("i is ", i, " and j is ", j)
            console.log(`Comparing ${arr[i]} with ${arr[j]}`)
            if(arr[i] > arr[j]) {
                console.log(`swapping ${arr[i]} is greater then ${arr[j]}`)
                swap(i, j)
                console.log(arr);
                 
            }
        }
    }
}

function swap(i, j) {
    [arr[j], arr[i]] = [arr[i], arr[j]]
}



console.log(arr);
bubbleSort();

// console.log(arr);
