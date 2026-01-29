
class Solution {
    maxXOR(arr) {
        // code here
        let maxXor = 0;
        let mask = 0;
        
        for (let bit = 31; bit >= 0; bit--) {
            mask |= (1 << bit);
            const s = new Set();
            
            for (let num of arr) {
                s.add(num & mask)
            }
            
            const candidate = maxXor | (1 << bit);
            
            for (let prefix of s) {
                if (s.has(prefix ^ candidate)) {
                    maxXor = candidate;
                    break;
                }
            }
        }
        
        return maxXor;
    }
}
