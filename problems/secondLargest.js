const { test } = require("../test");

// Write a function called secondLargest(numbers) that returns the second-largest distinct number without sorting the array.

function secondLargest(numbers) {
    if (numbers.length <= 1) return null;
    let largest = numbers[0], secLargest, hasSecondLargest = false;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secLargest = largest;
            largest = numbers[i];
            hasSecondLargest = true;
        } else if (numbers[i] < largest && (!hasSecondLargest || numbers[i] > secLargest)) {
            secLargest = numbers[i];
            hasSecondLargest = true;
        }
    }
    return hasSecondLargest ? secLargest : null;
}


test(secondLargest([5, 1, 5, 3]), 3);             // 3
test(secondLargest([-1, -5, -3]), -3);             // -3
test(secondLargest([4, 4, 4]), null);                // null
test(secondLargest([1, 2]), 1);                   // 1
test(secondLargest([]), null);                       // null
test(secondLargest([-10000000000, -20000000000]), -20000000000); // -20000000000
test(secondLargest([5, 5, 3, 3, 1]), 3);          // 3