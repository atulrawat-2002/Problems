var generate = function(numRows) {
    let ans = [];

    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1);
        row[0] = row[i] = 1;

        for (let j = 1; j < i; j++) {
            row[j] = ans[i - 1][j - 1] + ans[i - 1][j];
        }

        ans.push(row);
    }

    return ans;
};
