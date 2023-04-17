/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    
    while (min <= max) {
        let mid = Math.floor((max + min) / 2);
        let guess = nums[mid];

        if (guess < target) {
            min = mid + 1;
        }
        if (guess > target) {
            max = mid - 1;
        }
        if (guess === target) {
            return mid;
        }
    }
    return min;
};