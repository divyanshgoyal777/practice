const { test } = require("../test");

// Write a function longestIncreasingSegment(numbers) that returns a new array containing the longest contiguous, strictly increasing segment of the input array.
// A segment must consist of consecutive elements in the original array. You cannot skip elements to make a longer sequence.

function longestIncreasingSegment(nums) {
    if (nums.length === 0) return [];

    let current = [nums[0]];
    let longest = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            current.push(nums[i]);
        } else {
            current = [nums[i]];
        }
        if (current.length > longest.length ||
            (current.length === longest.length && nums[i] > longest[longest.length - 1])) {
            longest = current.slice();
        }
    }

    return longest;
}


test(longestIncreasingSegment([1, 2, 3, 1, 2, 5]), [1, 2, 5]); // [1, 2, 5]
test(longestIncreasingSegment([5, 6, 7, 2, 3, 4, 5]), [2, 3, 4, 5]); // [2, 3, 4, 5]
test(longestIncreasingSegment([4, 3, 2, 1]), [4]); // [4]
test(longestIncreasingSegment([2, 2, 3, 4]), [2, 3, 4]); // [2, 3, 4]
test(longestIncreasingSegment([]), []); // []
test(longestIncreasingSegment([7]), [7]); // [7]