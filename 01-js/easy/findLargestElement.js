/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    var largestNum = numbers[0]
    for (var i = 0; i < numbers.length; i++) { 
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largestNum;
}

module.exports = findLargestElement;