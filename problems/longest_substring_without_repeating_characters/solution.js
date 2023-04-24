/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let longestLength = 0;
    let window = [];

    while (i < s.length) {
        let currentChar = s.at(i);

        if (!window.includes(currentChar)) {
            window.push(currentChar);

            if (window.length > longestLength) {
                longestLength = window.length;
            };
            i++;
        }
        else {
            window.splice(0,(window.indexOf(currentChar) + 1));
            window.push(currentChar);     
            i++;
        }
    }
    return longestLength;
};