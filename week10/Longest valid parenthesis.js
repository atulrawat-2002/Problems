/************************* USING STACK ********************** */

class Solution {
    maxLength(s) {
        // code here
        let stack = [-1];
        let maxLen = 0;
        for(let i = 0; i < s.length; i++) {
            if(s[i] === '(') {
                stack.push(i);
            }
            else {
                stack.pop();
                if(stack.length === 0) {
                    stack.push(i);
                }
                else maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
        
        return maxLen;
    }
}

/*************************** USING TWO TRAVERSALS AND OPENING AND CLOSING COUNT ******************************** */


class Solution {
    maxLength(s) {
        // code here
        let op = 0, cl = 0, maxRight = 0, maxLeft = 0;
        
        for(let i = 0; i < s.length; i++) {
            if(s[i] === '(') op++;
            else cl++;
            
            if(op === cl) maxRight = Math.max(maxRight, op * 2);
            else if(cl > op) op = 0, cl = 0;
        }
        
        op = 0, cl = 0;
        
        for(let i = s.length - 1; i >= 0; i--) {
            if(s[i] === '(') op++;
            else cl++;
            
            if(op === cl) maxLeft = Math.max(maxLeft, op * 2);
            else if(op > cl) op = 0, cl = 0;
        }
        
        return Math.max(maxLeft, maxRight);
    }
}


/************************* USING DYNAMIC PROGRAMMING *************** */

var longestValidParentheses = function(s) {
    let dp = new Array(s.length).fill(0);
    let maxLen = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
                dp[i] = dp[i - 1] + ((i - dp[i - 1] - 2) >= 0 ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
            maxLen = Math.max(maxLen, dp[i]);
        }
    }

    return maxLen;
};
