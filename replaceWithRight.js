

    // 17 18 5 4 6 1
    //           1-1
    //           max = 6
var replaceElements = function(arr) {
    function getMax(a, b){
        if(a > b)
        return a
        else return b;
    }
    let max = getMax(arr[arr.length - 1], arr[arr.length - 2]);
    for(let i = arr.length - 3; i >= 0; i--){
        if(arr[i] > max){
            let x = max;
            max = arr[i];
            arr[i] = x;
        }
        else{
            arr[i] = max;
        }
    }
    arr[arr.length - 2] = arr[arr.length - 1];
    arr[arr.length - 1] = -1;

    return arr;
};