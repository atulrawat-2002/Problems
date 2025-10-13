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
