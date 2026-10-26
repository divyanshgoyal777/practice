const { test } = require("../test");

// Write a function findMissingNumber(numbers).
// You are given an array containing distinct integers from 0 through n, with exactly one number missing. The array has n elements.
// Return the missing number.


function findMissingNumber(nums) {
    let sumOfArrayElements = 0;
    let sumOfNaturalNums = 0;

    for (let i = 0; i < nums.length; i++) {
        sumOfArrayElements += nums[i];
        sumOfNaturalNums += i + 1;
    }

    return sumOfNaturalNums - sumOfArrayElements;
}

test(findMissingNumber([3, 0, 1]), 2); // 2
test(findMissingNumber([0, 1]), 2); // 2
test(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8); // 8
test(findMissingNumber([1]), 0); // 0
test(findMissingNumber([]), 0); // 0

