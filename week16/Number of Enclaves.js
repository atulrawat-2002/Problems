function dfs(row, col, grid, vis, m, n) {
    vis[row][col] = true;

    let delRow = [0, 0, 1, -1];
    let delCol = [1, -1, 0, 0];

    for (let i = 0; i < 4; i++) {
        let r = row + delRow[i];
        let c = col + delCol[i];

        if (
            r >= 0 && r < m &&
            c >= 0 && c < n &&
            grid[r][c] === 1 &&
            !vis[r][c]
        ) {
            dfs(r, c, grid, vis, m, n)
        }

    }
}

var numEnclaves = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let vis = Array.from({ length: m }, () => Array(n).fill(false));
    let ans = 0;

    let i = 0;
    let j = 0;

    while (j < n) {
        if (grid[i][j] === 1 && !vis[i][j]) {
            dfs(i, j, grid, vis, m, n)
        }
        j++;
    }

    j--;
    while (i < m) {
        if (grid[i][j] === 1 && !vis[i][j]) {
            dfs(i, j, grid, vis, m, n)
        }
        i++;
    }

    i--;
    while (j >= 0) {
        if (grid[i][j] === 1 && !vis[i][j]) {
            dfs(i, j, grid, vis, m, n)
        }
        j--;
    }

    j++;
    while (i >= 0) {
        if (grid[i][j] === 1 && !vis[i][j]) {
            dfs(i, j, grid, vis, m, n)
        }
        i--;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && !vis[i][j]) ans++;
        }
    }

    return ans;

};