const { test } = require("../test");

// Write a function called spiralOrder(matrix) that returns all elements of a matrix in clockwise spiral order, starting from the top-left corner.

function spiralOrder(matrix) {
    if (matrix.length === 0) return [];

    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}


test(spiralOrder([]), []); // []
test(spiralOrder([[7]]), [7]); // [7]
test(spiralOrder([[1, 2, 3, 4]]), [1, 2, 3, 4]); // [1, 2, 3, 4]
test(spiralOrder([[1], [2], [3], [4]]), [1, 2, 3, 4]); // [1, 2, 3, 4]
test(spiralOrder([
    [1, 2, 3],
    [4, 5, 6]
]), [
    1, 2, 3, 6, 5, 4
]); // [1, 2, 3, 6, 5, 4]
test(spiralOrder([
    [1, 2],
    [3, 4],
    [5, 6]
]), [
    1, 2, 4, 6, 5, 3
]); // [1, 2, 4, 6, 5, 3]
test(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]), [1, 2, 3, 6, 9, 8, 7, 4, 5]); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
test(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]), [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
test(spiralOrder([
    [-1, 0],
    [2, -3]
]), [-1, 0, -3, 2]); // [-1, 0, -3, 2]
test(spiralOrder([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
]), [1, 2, 4, 6, 8, 7, 5, 3]); // [1, 2, 4, 6, 8, 7, 5, 3]

