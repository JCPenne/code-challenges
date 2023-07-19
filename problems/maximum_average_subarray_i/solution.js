/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (nums.length === 1) return nums[0];
    if (nums.length === k) return nums.reduce((a,c) => a + c) / k;
    
    let i = 0;

    let total = nums.slice(0,k).reduce((a,c) => a + c);
    console.log('total',total);

    let runningTotal = total;

    while (k + i <= nums.length) {
        runningTotal = runningTotal - nums[i] + nums[k + i];
        console.log('runningTotal',runningTotal)

        if (runningTotal > total) {
            total = runningTotal;
        }
        i++;
    }
    return total / k;
};