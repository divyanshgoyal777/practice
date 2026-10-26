const { test } = require("../test");

// Write a function called equilibriumIndex(numbers) that returns the first index where the sum of all elements strictly to its left equals the sum of all elements strictly to its right.
// The element at the index itself is excluded from both sums.

function equilibriumIndex(nums) {
    const left = [0];
    const n = nums.length;
    const right = new Array(n).fill(0);

    for (let i = 0; i < n - 1; i++) {
        left.push(left[i] + nums[i]);
    }

    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] + nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        if (left[i] === right[i]) return i;
    }

    return -1;
}

// function equilibriumIndex(nums) {
//     let sum = 0;
//     let leftSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }

//     for (let i = 0; i < nums.length; i++) {
//         const rightSum = sum - leftSum - nums[i];
//         if (leftSum === rightSum) {
//             return i;
//         }
//         leftSum += nums[i];
//     }

//     return -1;
// }

test(equilibriumIndex([1, 7, 3, 6, 5, 6]), 3); // Expected: 3
test(equilibriumIndex([2, 1, -1]), 0); // Expected: 0
test(equilibriumIndex([1, -1, 2]), 2); // Expected: 2
test(equilibriumIndex([1, 2, 3]), -1); // Expected: -1
test(equilibriumIndex([]), -1); // Expected: -1
test(equilibriumIndex([5]), 0); // Expected: 0
test(equilibriumIndex([0]), 0); // Expected: 0
test(equilibriumIndex([1, 1]), -1); // Expected: -1 
test(equilibriumIndex([0, 0]), 0); // Expected: 0
test(equilibriumIndex([0, 0, 0, 0, 0]), 0); // Expected: 0
test(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0]), 3); // Expected: 3
test(equilibriumIndex([-1, -1, -1, 0, 1, 1]), 0); // Expected: 0
test(equilibriumIndex([0, 0, 0, 0]), 0); // Expected: 0
test(equilibriumIndex([-2, 3, 1, -1, -3]), 0); // Expected: 0
test(equilibriumIndex([1000000, 2000000, 3000000, 0, 3000000]), 2); // Expected: 2
test(equilibriumIndex([1, 2, 1, 2, 1]), 2); // Expected: 2
test(equilibriumIndex([4, 0, 4]), 1); // Expected: 1
test(equilibriumIndex([-5, -2, -3]), -1); // Expected: -1
test(equilibriumIndex([1, 0, 1, 0, 1]), 2); // Expected: 2
test(equilibriumIndex([0, 1, -1, 0]), 0); // Expected: 0
