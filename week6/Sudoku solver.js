/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function isSafe(row, col, val, board) {
        for(let i = 0; i < 9; i++) {
            if(board[row][i] === val) return false;

            if(board[i][col] === val) return false;

            if(board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + Math.floor(i % 3)] === val) return false;
        }
        return true;
    }
    function solve(board ) {
        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                if(board[i][j] === '.') {
                    for(let val = 1; val <= 9; val++) {
                        let ch = String(val);
                        if(isSafe(i, j, ch, board)) {
                            board[i][j] = ch;
                            if(solve(board) === true) return true;
                            else board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    solve(board) ;

};