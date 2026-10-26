const { test } = require("../test");

// Write a function called compressString(str) that compresses consecutive repeated characters by replacing each group with the character followed by its count.


function compressString(str) {
    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            result += str[i] + count;
            count = 1;
        } else {
            count++;
        }
    }

    return result;
}

test(compressString("aaabbcaaaa"), "a3b2c1a4"); // "a3b2c1a4"
test(compressString("abcd"), "a1b1c1d1"); // "a1b1c1d1"
test(compressString(""), "");  // ""
test(compressString("xxxxx"), "x5"); // "x5"
test(compressString("aabbaa"), "a2b2a2"); // "a2b2a2"
