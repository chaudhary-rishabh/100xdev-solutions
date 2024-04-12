// Write a function that takes an array of numbers and returns the sum of all positive numbers in the array.

function sumArray(arr) {
    const sum = arr.reduce((acc, num) => {
        if (num > 0 && num % 2 === 0) {
            return acc + num;
        } else {
            return acc;
        }
    }, 0);

    return sum;
}

console.log(sumArray([-5,-3,-7,-6,2,4,34,5,2,7])); 