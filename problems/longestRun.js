const { test } = require("../test");

// Write a function longestRun(numbers) that returns an array containing the number that appears in the longest consecutive run, repeated for the length of that run. A run ends when the next number differs from the current number.

function longestRun(nums) {
    let curr = 1, max = 1, num = nums[0];

    for (let i = 1; i < nums.length; i++) {
        curr = nums[i] === nums[i - 1] ? curr + 1 : 1;

        if (curr > max) {
            max = curr;
            num = nums[i];
        }
    }

    const result = []
    for (let i = 0; i < max && nums.length; i++) {
        result.push(num)
    }

    return result;
}

test(longestRun([1, 1, 2]), [1, 1]); // [1, 1]
test(longestRun([1, 2, 2]), [2, 2]); // [2, 2]
test(longestRun([1, 1, 2, 2]), [1, 1]); // [1, 1]
test(longestRun([1, 2, 2, 3, 3, 3]), [3, 3, 3]); // [3, 3, 3]
test(longestRun([4, 4, 1, 1, 1]), [1, 1, 1]); // [1, 1, 1]
test(longestRun([5, 5, 5, 2, 2, 2]), [5, 5, 5]); // [5, 5, 5]
test(longestRun([1, 1, 2, 2, 2, 1, 1, 1]), [2, 2, 2]); // [2,2,2]
test(longestRun([1, 1, 2, 2, 2, 3, 3]), [2, 2, 2]); // [2, 2, 2]
test(longestRun([4, 4, 4, 1, 1, 2]), [4, 4, 4]); // [4, 4, 4]
test(longestRun([1, 2, 3, 3, 3, 3, 2]), [3, 3, 3, 3]); // [3, 3, 3, 3]
test(longestRun([5, 5, 1, 1]), [5, 5]); // [5, 5]
test(longestRun([7]), [7]); // [7]
test(longestRun([]), []); // []

