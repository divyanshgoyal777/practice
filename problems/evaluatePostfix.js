const { test } = require("../test");

// Given an array representing a mathematical expression in postfix notation, write a function called evaluatePostfix(tokens) that evaluates and returns the result.
// In postfix notation, the operator comes after its operands.
// For example, ["2", "3", "+"] means 2 + 3 = 5.
// Supported operators: +, -, *, /.
// For division, truncate the result toward zero.


function evaluatePostfix(arr) {
    const stack = [];
    const operations = {
        '+': function (a, b) { return a + b },
        '-': function (a, b) { return a - b },
        '*': function (a, b) { return a * b },
        '/': function (a, b) { return a / b },
    }

    for (const e of arr) {
        if (e in operations) {
            const b = Number(stack.pop());
            const a = Number(stack.pop());
            stack.push(operations[e](a, b));
        } else {
            stack.push(Number(e));
        }
    }

    return Math.trunc(stack.pop());
}

test(evaluatePostfix(["2", "3", "+"]), 5); // 5
test(evaluatePostfix(["5", "2", "-", "3", "*"]), 9); // 9
test(evaluatePostfix(["8", "3", "/"]), 2); // 2
test(evaluatePostfix(["-7", "2", "/"]), -3); // -3
test(evaluatePostfix(["4", "2", "+", "3", "*"]), 18); // 18
test(evaluatePostfix(["10", "2", "3", "*", "+"]), 16); // 16
test(evaluatePostfix(["5"]), 5); // 5
test(evaluatePostfix(["12", "3", "/", "2", "-"]), 2); // 2
test(evaluatePostfix(["2", "3", "-", "4", "-"]), -5); // -5
test(evaluatePostfix(["2", "3", "+", "4", "5", "+", "*"]), 45); // 45