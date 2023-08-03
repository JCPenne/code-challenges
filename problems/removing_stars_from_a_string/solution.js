/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let result = [];

    for (let i = 0; i < s.length; i++) {
        if (s.at(i) !== '*') {
            result.push(s.at(i));
        } else {
            result.pop();
        }
    }
    return result.join('');
};