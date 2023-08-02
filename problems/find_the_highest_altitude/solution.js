/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let current = 0;
    let max = 0;

    gain.forEach(point => {
        current += point;
        if (current > max) max = current;
    })
    return max
};