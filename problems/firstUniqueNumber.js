const { test } = require("../test");

// Write a function firstUniqueNumber(numbers) that returns the first number that appears exactly once in the array.If every number repeats, return null.

function firstUniqueNumber(nums) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === 1) {
            return nums[i];
        }
    }

    return null;
}

test(firstUniqueNumber([7, 7, 3, 3, 9]), 9); // 9
test(firstUniqueNumber([4, 5, 1, 2, 1, 4, 5]), 2); // 2 
test(firstUniqueNumber([1, 2, 3]), 1); // 1
test(firstUniqueNumber([5, 5, 5]), null); // null
test(firstUniqueNumber([]), null); // null
test(firstUniqueNumber([0, -1, 0, -1, 8]), 8); // 8
