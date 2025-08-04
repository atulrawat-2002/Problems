function isPelindrom(num) {
    let reverseNum = 0;
    let preserve = num;

    while(num > 0){
        reverseNum = ( reverseNum * 10 ) + num % 10;
        num = Math.floor( num / 10 );
    }

    console.log(num, reverseNum);
    

    return reverseNum === preserve;
}

console.log(isPelindrom(21));