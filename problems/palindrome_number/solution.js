/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  y = x.toString().split('').reverse().join('');
  if (y == x) {
    return true;
  } else {
      return false;
  }
};