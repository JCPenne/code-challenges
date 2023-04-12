/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let placeholder = null;
    let counter = 0;
    let k = 0;

    let i = 0;

    while (i < nums.length) {
        if (nums[i] !== placeholder) {
            placeholder = nums[i];
            counter = 1;
            k += 1;
            i++;
        }
        if (nums[i] === placeholder && counter > 0) {
            nums.splice(i,1)
            counter += 1;
        }
    }

    return k;
};