/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const newT = t.split('').sort().join('');
    const newS = s.split('').sort().join('');
    return newT === newS && true;
};