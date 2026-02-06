
class Solution {

    AllPossibleStrings(s) {
        
        let len = s.length;
        let ans = [];
        
        for (let i = 1; i < (1 << len); i++) {
            let temp = "";
            for (let j = 0; j < len; j++) {
                if (i & (1 << j)) {
                    temp += s[j];
                }
            }
            
            ans.push(temp)
        }
        ans.sort();
        return ans;
    }
}