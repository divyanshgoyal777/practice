const { test } = require("../test");

// Write a function longestIncreasingLength(numbers) that returns the length of the longest contiguous strictly increasing sequence in an array.
// A sequence is contiguous when its elements are next to each other in the original array. Each element must be strictly greater than the preceding element.

function longestIncreasingLength(numbers) {
    if (numbers.length === 0) return 0;
    let count = 1;
    let max = 1;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            count++;
            max = Math.max(count, max);
        } else {
            count = 1;
        }
    }
    return max;
}


test(longestIncreasingLength([1, 2, 3, 4]), 4); // 4
test(longestIncreasingLength([1, 2, 3, 0, 1]), 3); // 3
test(longestIncreasingLength([1, 2, 3, 1, 2, 5]), 3); // 3
test(longestIncreasingLength([5, 4, 3, 2]), 1);        // 1
test(longestIncreasingLength([1, 2, 2, 3, 4]), 3);     // 3
test(longestIncreasingLength([7]), 1);                 // 1
test(longestIncreasingLength([]), 0);                  // 0
test(longestIncreasingLength([-3, -2, -1, -4]), 3);    // 3
test(longestIncreasingLength([1, 3, 2, 4, 4.308, 5, 7, 8, 9]), 7); // 7

