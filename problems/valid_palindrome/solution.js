/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphaNumStr = s.toLowerCase().replace(/[^a-z0-9]+/g, '').split('');

    if (alphaNumStr.join('') === alphaNumStr.reverse().join('')) {
        return true;
    } else {
        return false;
    }
};