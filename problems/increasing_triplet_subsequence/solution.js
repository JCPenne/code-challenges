/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    
    for (let currentNum of nums) {
        if (currentNum > second && currentNum > first) {return true};
        if (currentNum > first) {
            second = currentNum;
        } else {
            first = currentNum;
        }
    };
    return false;
};