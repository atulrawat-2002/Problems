
class Solution {
    isBalanced(s) {
        // code here
        let st = [];
        let opened = ['(', '[', '{'];
        
        let match = new Map();
        match.set('(', ')');
        match.set('{', '}');
        match.set('[', ']');
        
        for(let i = 0; i < s.length; i++) {
            if( opened.includes(s[i]) ) {
                st.push(s[i]);
            } else {
                if(st.length === 0) return false;
                let top = st.pop();
                if(match.get(top) !== s[i]) return false;
            }
        }
        return st.length === 0;
    }
}