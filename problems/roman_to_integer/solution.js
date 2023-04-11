/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const hash = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900};
    
    let result= 0;

    const arr = s.split('');

    let p1 = 0;
    let p2 = 1;

    while (p1 !== arr.length) {
        let dblChar = arr[p1] + arr[p2];
        if (dblChar in hash) {
            result += hash[dblChar];
            p1 += 2;
            p2 += 2
        }
        else {
            result += hash[arr[p1]];
            p1 += 1;
            p2 += 1;
        }
    }
    return result;
};