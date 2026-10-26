const { test } = require("../test");

// Write a function mergeSortedArrays(first, second) that returns a new sorted array containing all elements from both input arrays. Both input arrays are already sorted in ascending order.


function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0, j = 0, k = 0;

    while (i < arr1.length && j < arr2.length) {
        result[k++] = (arr1[i] < arr2[j]) ? arr1[i++] : arr2[j++];
    }
    while (i < arr1.length) {
        result[k++] = arr1[i++];
    }
    while (j < arr2.length) {
        result[k++] = arr2[j++];
    }

    return result;
}

test(mergeSortedArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]); // [1, 2, 3, 4, 5, 6]
test(mergeSortedArrays([1, 2, 2], [2, 3, 4]), [1, 2, 2, 2, 3, 4]); // [1, 2, 2, 2, 3, 4]
test(mergeSortedArrays([], [1, 2]), [1, 2]); // [1, 2]
test(mergeSortedArrays([], []), []); // []
test(mergeSortedArrays([1, 2], [3, 4]), [1, 2, 3, 4]); // [1, 2, 3, 4]
test(mergeSortedArrays([3, 4], [1, 2]), [1, 2, 3, 4]); // [1, 2, 3, 4]
test(mergeSortedArrays([-5, -1, 4], [-3, 0, 6]), [-5, -3, -1, 0, 4, 6]); // [-5, -3, -1, 0, 4, 6]
