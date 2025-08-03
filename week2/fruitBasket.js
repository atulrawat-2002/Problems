



// 7 * 6 * 5 * 4 * 3 * 2 * 1


function fact(num) {

    let result = 1;

    if(num === 0 || num === 1) return 1;

    for(let i = num; i > 0; i--){
        result = result * i;
    }

    return result;
    
}


console.log(fact(10))