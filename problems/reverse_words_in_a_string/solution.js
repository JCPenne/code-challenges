/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').reverse().filter(element => element.length > 0).join(' ')
};
//SPLIT THE STRING by spaces
//Reverse the resulting array
//IF the current element has a length < 1 remove it
//Join the remaining array with spaces