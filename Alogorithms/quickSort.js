let arr = [3, 9, 6, 5, 4, 8, 1, 7, 2];


function quickSort (l, h) {
    let j = partition(l, h);

    quickSort(l, j);
    quickSort(j + 1, h)
}