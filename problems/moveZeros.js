const { test } = require("../test");

// Write a function moveZeros(numbers) that moves every 0 to the end of the array while preserving the relative order of all non-zero elements.

function moveZeros(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

test(moveZeros([]), []); // []
test(moveZeros([0, 0, 0]), [0, 0, 0]); // [0, 0, 0] 
test(moveZeros([0, 0, 1, 2, 3]), [1, 2, 3, 0, 0]); // [1, 2, 3, 0, 0] 
test(moveZeros([4, 0, 5, 0, 2]), [4, 5, 2, 0, 0]); // [4, 5, 2, 0, 0]
test(moveZeros([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]); // [1, 3, 12, 0, 0]
