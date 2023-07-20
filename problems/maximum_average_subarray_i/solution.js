/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {    
    let total = nums.slice(0,k).reduce((a,c) => a + c);
    let runningTotal = total;

    for (let i = 1; i <= nums.length - k; i++) {
        runningTotal = runningTotal - nums[i - 1] + nums[(k - 1) + i];

        if (runningTotal > total) total = runningTotal;
    }
    return total / k
};