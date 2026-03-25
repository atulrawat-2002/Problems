
var canPartitionGrid = function(grid) {
    let suffix = 0;
    let total = 0

    let m = grid.length;
    let n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            total += grid[i][j];
        }
    }

    
    // check horizontally
    let prefix = 0;
    suffix = total;

    for (let i = 0; i < m; i++) {

        for (let j = 0; j < n; j++) {

            prefix += grid[i][j];
            suffix -= grid[i][j];
        }
        if(prefix === suffix) return true;

    }

    // check vertically
    prefix = 0;
    suffix = total;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            prefix += grid[j][i];
            suffix -= grid[j][i]
        }
        if(prefix === suffix) return true;
    }

    return false;

};