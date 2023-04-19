/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;

    nums.forEach(num => result = result ^ num);
    
    return result
};