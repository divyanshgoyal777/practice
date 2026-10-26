const { test } = require("../test");

// Write a function called productExceptSelf(numbers) that returns a new array where each element is the product of every element in the original array except the element at that same index.
// You must solve this without using division.

// const prefix = [1];
// const suffix = [1, 1, 1, 1, 1];

// for (let i = 1; i < nums.length; i++) {
//     prefix[i] = prefix[i - 1] * nums[i - 1];
// }

// for (let i = nums.length - 2; i >= 0; i--) {
//     suffix[i] = suffix[i + 1] * nums[i + 1];
// }

// for (let i = 0; i < nums.length - 1; i++) {
//     suffix.unshift(suffix[0] * nums[nums.length - i - 1]);
// }

// console.log(prefix);
// console.log(suffix);

function productExceptSelf(nums) {
    if (nums.length === 0) return nums;
    const result = [1];
    let suffixProduct = 1;

    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return result;
}


test(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]); // [24, 12, 8, 6]
test(productExceptSelf([2, 3, 0, 4]), [0, 0, 24, 0]); // [0, 0, 24, 0]
test(productExceptSelf([0, 5, 0]), [0, 0, 0]); // [0, 0, 0]
test(productExceptSelf([-1, 2, -3, 4]), [-24, 12, -8, 6]); // [-24, 12, -8, 6]
test(productExceptSelf([5]), [1]); // [1]
test(productExceptSelf([]), []); // []

