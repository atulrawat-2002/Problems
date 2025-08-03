



function fact(num) {
    if(num === 1 || num === 0) return 1;

    return num * fact(num - 1);
}


console.log(fact(10))