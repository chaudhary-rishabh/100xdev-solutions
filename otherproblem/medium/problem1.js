// Write a function that takes a string and returns the first non-repeated character in the string. If all characters are repeated, return null.

const nonRepeated = (str) => {
    const charCount = {};

    // Count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If all characters are repeated, return null
    return null;
}

const ans = nonRepeated("hhello");
console.log(ans); // Output: "e"
