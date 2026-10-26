const { test } = require("../test");

// Write a function removeDuplicates(numbers) that removes duplicate numbers from an array in place, preserving the order of their first occurrences.
// Return the modified array.
// You must not create another array to store the result.

function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                nums.splice(j--, 1);
            }
        }
    }
    return nums;
}

test(removeDuplicates([1, 2, 1, 3, 2, 4]), [1, 2, 3, 4]); // [1, 2, 3, 4]
test(removeDuplicates([5, 5, 5, 5]), [5]); // [5]
test(removeDuplicates([1, 2, 3]), [1, 2, 3]); // [1, 2, 3]
test(removeDuplicates([]), []); // []
test(removeDuplicates([3, 1, 3, 2, 1]), [3, 1, 2]); // [3, 1, 2]

const numbers = [1, 2, 1, 3, 2, 4];
const result = removeDuplicates(numbers);
console.log(numbers);         // [1, 2, 3, 4]
console.log(numbers === result); // true
