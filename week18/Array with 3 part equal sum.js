
var canThreePartsEqualSum = function(arr) {
    let sum = 0;

    for (let val of arr) {
        sum += val;
    }

    if (sum % 3 != 0) return false;

    sum = sum / 3;
    let first = -1;
    let second = -1;
    let runningSum = 0;

    for (let i = 0; i < arr.length; i++) {
        runningSum += arr[i];
        if (runningSum === sum) {
            first = i;
            runningSum = 0;
            break;
        }
    }

    for (let i = first + 1; i < arr.length - 1; i++) {
        runningSum += arr[i];
        if (runningSum === sum) {
            second = i;
            runningSum = 0;
            break;
        }
    }

    if (first != -1 && second != -1) return true
    return false;

};