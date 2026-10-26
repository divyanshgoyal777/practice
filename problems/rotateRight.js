const { test } = require("../test");

// Write a function rotateRight(nums, k) that rotates an array to the right by k positions, modifying the original array.

function reversePart(start, end, nums) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    };
}

function rotateRight(nums, k) {
    const n = nums.length;
    if (n <= 1 || k === 0) return nums;

    k = k % n;

    nums.reverse();
    reversePart(0, k - 1, nums);
    reversePart(k, n - 1, nums);

    return nums;
}

// function rotateRight(nums, k) {
//     const n = nums.length;
//     if (n <= 1 || k === 0) return nums;

//     k = k % n;

//     for (let i = 0; i < k; i++) {
//         const last = nums[n - 1];
//         for (let j = n - 1; j > 0; j--) {
//             nums[j] = nums[j - 1];
//         }
//         nums[0] = last;
//     }

//     return nums;
// }


test(rotateRight([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3]); // [4, 5, 1, 2, 3]
test(rotateRight([1, 2, 3], 1), [3, 1, 2]); // [3, 1, 2]
test(rotateRight([1, 2, 3], 3), [1, 2, 3]); // [1, 2, 3]
test(rotateRight([1, 2, 3], 4), [3, 1, 2]); // [3, 1, 2]
test(rotateRight([1, 2], 1), [2, 1]); // [2, 1]
test(rotateRight([], 3), []); // []
test(rotateRight([7], 10), [7]); // [7]
