/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0;
    while (i < haystack.length) {
        let substringEnd = i + needle.length;

        if (haystack.substring(i,substringEnd) === needle) {
            return i
        }
        else {
            i++
        }
    }
    return -1;
};