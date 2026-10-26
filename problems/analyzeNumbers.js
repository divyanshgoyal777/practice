const { test } = require("../test");

// Write a JavaScript function called analyzeNumbers(numbers) that returns the second-largest distinct number in an array. If there is no second-largest distinct number, return null

function analyzeNumbers(numbers) {
    if (numbers.length <= 1) return null;
    let largest = numbers[0], secLargest = -Infinity;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secLargest = largest;
            largest = numbers[i];
        } else if (numbers[i] < largest && numbers[i] > secLargest) {
            secLargest = numbers[i];
        }
    }
    return secLargest === -Infinity ? null : secLargest;
}

test(analyzeNumbers([]), null); // null
test(analyzeNumbers([7]), null); // null
test(analyzeNumbers([9, 9, 6]), 6); // 6
test(analyzeNumbers([-1, -5, -3]), -3); // -3
test(analyzeNumbers([10, 5, 8, 10, 8]), 8); // 8
test(analyzeNumbers([4, 4, 4]), null);         // null
test(analyzeNumbers([-5, -2, -10]), -5);     // -5
test(analyzeNumbers([1, 2]), 1);            // 1