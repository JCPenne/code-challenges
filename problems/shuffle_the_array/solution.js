/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    // if (n === 1) return nums;

    const result = [];
    let i = 0;

    while (i < n) {
        result.push(nums[i],nums[i + n]);
        i++;
    }
    return result;
};

/* 
    Loop over array
    Push into new array nums[i], nums[i + n]
    while i < n
*/