/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  if (str === "" || str === " ") {
    return true;
  }



  if (str.toLowerCase().split(" ").reverse().join("") !== str.toLowerCase()) {
    return false
  }
  return true;
}

module.exports = isPalindrome;
