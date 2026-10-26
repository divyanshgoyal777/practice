const { test } = require("../test");

// Write a function called isBalanced(str) that returns true if every opening bracket has a matching closing bracket in the correct order, and false otherwise.
// The supported brackets are (), [], and {}. Ignore all other characters.

function isBalanced(str) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (const char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char in pairs) {
            if (stack.pop() !== pairs[char]) return false;
        }
    }

    return stack.length === 0;
}

test(isBalanced("()"), true);          // true
test(isBalanced("([]{})"), true);      // true
test(isBalanced("{[()]}"), true);      // true
test(isBalanced("(]"), false);          // false
test(isBalanced("([)]"), false);        // false
test(isBalanced("((("), false);         // false
test(isBalanced(""), true);            // true
test(isBalanced("a+(b*c)-{d/e}"), true);// true
test(isBalanced("]"), false);           // false
test(isBalanced("({[]})]"), false);     // false
test(isBalanced("{{{{}}}}"), true);    // true
test(isBalanced("[(])"), false);        // false

