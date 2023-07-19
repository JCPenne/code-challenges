/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) return true;
    if (t.length === 0 && s.length > 0) return false;

    let p1 = 0;
    let p2 = 0;

    while (p1 < s.length) {
        if (s.at(p1) === t.at(p2)) {
             p1++;
             p2++;
        } else {
            p2++;
        }
        if (p1 === s.length) return true; 
        if (p2 === t.length) return false;
    }
};