const getMinDefference = (height, k) => {
    let ans = Number.MAX_SAFE_INTEGER;
    // 1  5  8  10
    for (let i of height) {
        if (i + k > 0) {
            for (let j of height) {
                if (j + k > 0 && i != j) {
                    if ((j + k) > (i + k)) {
                        ans = Math.min(ans, (j + k) - (i + k));
                        console.log(j+k, i+k, ans)
                    }
                }
            }
            for (let j of height) {
                if (j - k > 0 && i != j) {
                    if ((j - k) > (i + k)) {
                        ans = Math.min(ans, (j - k) - (i + k));
                        console.log(j-k, i+k, ans)
                    }
                }
            }
        }
        if (i - k > 0) {
            for (let j of height) {
                if (j + k > 0 && i != j) {
                    if ((j + k) > (i - k)) {
                        ans = Math.min(ans, (j + k) - (i - k));
                        console.log(j+k, i-k, ans)
                    }
                }
            }
            for (let j of height) {
                if (j - k > 0 && i != j) {
                    if ((j - k) > (i - k)) {
                        ans = Math.min(ans, (j - k) - (i - k));
                        console.log(j-k, i-k, ans)
                    }
                }
            }
        }
    }
    return ans;
}
let ans = getMinDefference([1, 5, 8, 10], 2);
console.log(ans)
