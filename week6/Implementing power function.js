class Solution {
    /**
     * Computes b raised to the power e recursively.
     * @param {number} b - The base.
     * @param {number} e - The exponent.
     * @returns {number} - The result of b^e.
     */
    power(b, e) {
        // Code here
        let ans = 1;
        let x = e;
        if(e < 0) e *= -1;
        
        function compute() {
            if(e === 0) return;
            
            if(!(e % 2 === 0)){
                ans = ans * b;
                e--;
            }
            
            b = b*b, e = e/2;
            
            compute()
            return;
        }
        
        compute();
        
        return x < 0 ? (1/ans) : ans;
    }
}


