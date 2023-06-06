/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const lettersChecked = [];
    let pOne = 0;
    let pTwo = 1;

    while (pOne < s.length) {
        let distanceCounter = s.charCodeAt(pOne) - 97
        
        if (s[pOne] !== s[pTwo]) pTwo++;

        if (s[pOne] === s[pTwo]) {
            if (pTwo - pOne - 1 !== distance[distanceCounter]) return false;

            lettersChecked.push(s[pOne])
            pOne++;
            while (lettersChecked.includes(s[pOne])) pOne++;
            pTwo = pOne + 1;
        }   
    }
    return true;
};