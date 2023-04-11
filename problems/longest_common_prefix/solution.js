/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <= 1) {
        return strs[0];
    }
    
    let result = '';
    
    const firstElement = strs[0];

    for (let i = 0; i < firstElement.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (firstElement.charCodeAt(i) !== strs[j].charCodeAt(i)) {
                return result;
            }
        }
        result += firstElement.at(i)
    }



    return result
};