/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = nums[mid];

        if (guess === target) {
            console.log('match found', mid)
            return mid;
        }
        if (guess > target) {
            high = mid - 1;
            console.log('new high', high)
        }
        if (guess < target) {
            low = mid + 1;
        }
    }
    return -1;
};