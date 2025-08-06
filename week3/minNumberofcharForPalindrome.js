/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    minChar(s) {
        // code here
        let rev = "";
        let i = 0; 
        let j = s.length - 1;
        while( j >= 0){
             rev += s[j--];
        }
        let com = s + "$" + rev;
        let n = com.length;
        
        i = 0;
        j = 1;
        let lps = new Array(n).fill(0);
        
        while( j < n ) {
            if( com[i] === com[j] ) lps[j++] = ++i;
            
            else if( i ) i = lps[i - 1];
            
            else j++;
        }
        
        return s.length - i;
    }
}