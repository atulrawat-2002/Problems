// User function Template for javascript

/**
 * @param {string} s
 * @return {string[]}
 */

class Solution {
    findPermutation(s) {
        // code here
        let ans = new Set()
        let values = new Array(s.length).fill(false);
        let ds = [];
        
        function permut() {
            if(ds.length === s.length) {
                ans.add(ds.join(""));
                    return;
            }
             for(let i = 0; i < s.length; i++) {
                    if(!values[i]) {
                     ds.push(s[i]);
                     values[i] = true;
                     permut();
                     ds.pop();
                     values[i] = false;
                    }
                }
        }
        
        permut();
        return Array.from(ans);
    }
}

