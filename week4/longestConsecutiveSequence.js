function longest (arr) {
    let ans = 0;
    let s = new Set(arr);
    for(let item of s) {
        let count = 1;
        if(!s.has(item - 1)) {
            while(s.has(value + count)) count++;
            ans = Math.max(ans, count);
        }
    }
    
    return ans
}