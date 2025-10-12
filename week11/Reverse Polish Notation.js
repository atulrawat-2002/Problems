
var evalRPN = function(tokens) {
    let stack = [];
    const operators = ['+', '-', '*', '/'];

    for (let token of tokens) {
        if (!operators.includes(token)) {
            stack.push(Number(token));
        } else {
            let right = stack.pop();
            let left = stack.pop();
            let res = 0;

            if (token === '+') res = left + right;
            else if (token === '-') res = left - right;
            else if (token === '*') res = left * right;
            else {
              
                res = left / right;
                res = res < 0 ? Math.ceil(res) : Math.floor(res);
            }

            stack.push(res);
        }
    }

    return stack.pop();
};
