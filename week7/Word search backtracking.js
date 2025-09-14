
class Solution {
    isWordExist(mat, word) {
        // code here
        function find(row, col, ind) {
            if(ind === word.length) return true;
            
            let n = mat.length;
            let m = mat[0].length;
            
            if(row < 0 || col < 0 || row >= n || col >= m) return false;
            
            if(mat[row][col] === word[ind]) {
                let temp = mat[row][col];
                mat[row][col] = '#';
                
                let res = find(row + 1, col, ind + 1) ||
                find(row - 1, col, ind + 1) ||
                find(row, col + 1, ind + 1) ||
                find(row, col - 1, ind + 1);
                
                mat[row][col] = temp;
                
                return res;
            }
            return false;
        }
        function solve() {
            for(let i = 0; i < mat.length; i++) {
                for(let j = 0; j < mat[0].length; j++) {
                    if(mat[i][j] === word[0]) {
                        if(find(i, j, 0)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
        
        if(word.length > mat.length * mat[0].length) return false;
        
        return solve();
    }
}