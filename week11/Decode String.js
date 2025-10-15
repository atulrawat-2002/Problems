/*********************** USING TWO STACK ********************** */

var decodeString = function(s) {
    let numStack = [];
    let strStack = [];
    let currStr = "";
    let currNum = 0;

    for (let char of s) {
        if (!isNaN(char)) { // if it's a digit
            currNum = currNum * 10 + Number(char);
        } else if (char === '[') {
            numStack.push(currNum);
            strStack.push(currStr);
            currNum = 0;
            currStr = "";
        } else if (char === ']') {
            let repeatTimes = numStack.pop();
            let prevStr = strStack.pop();
            currStr = prevStr + currStr.repeat(repeatTimes);
        } else {
            currStr += char;
        }
    }

    return currStr;
};


/******************** USING SINGLE STACK **************************/
/**
 * @param {string} s
 * @return {string}
 */
class Solution {
    decodedString(s) {
        // code here
        let n = s.length;
        let st = [];
        
        for(let i = 0; i < n; i++) {
            let cnt = 0;
            
            if( !isNaN(s[i]) ) {
                while( !isNaN(s[i]) ) {
                    cnt = cnt * 10 + ( s[i] - '0');
                    i++;
                }
                i--;
                cnt = cnt.toString()
                st.push(cnt);
                
            } else if(s[i] === ']') {
                
                let temp = "";
                
                while( st[st.length - 1] != '[') {
                    temp = st.pop() + temp;
                }
                
                st.pop();
                let cnt = parseInt(st.pop(), 10);
                
                temp = temp.repeat(cnt);
                
                for(let c of temp) {
                    st.push(c);
                }
                
            } else {
                st.push(s[i]);
            }
            
        }
        let ans = "";
        while(st.length) {
            ans = st.pop() + ans;
        }
        return ans;
    }
}