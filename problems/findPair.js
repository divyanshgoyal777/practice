const { test } = require("../test");

// Write a function called findPair(numbers, target) that returns the indices of the first pair of distinct elements whose sum equals target.

function findPair(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}

test(findPair([2, 7, 11, 15], 9), [0, 1]); // [0, 1]
test(findPair([3, 2, 4], 6), [1, 2]); // [1, 2]
test(findPair([3, 3], 6), [0, 1]); // [0, 1]
test(findPair([1, 2, 3], 10), null); // null 
test(findPair([-3, 7, 1, 4], 1), [0, 3]); // [0, 3]
test(findPair([-3, 7, 1, 4], 2), null); // null

