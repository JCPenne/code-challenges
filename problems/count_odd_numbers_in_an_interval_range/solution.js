/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let counter = 0
    for (num = low; num <= high; num++) {
        if (num % 2 !== 0) {
            counter += 1
        }
    }
    return counter
};