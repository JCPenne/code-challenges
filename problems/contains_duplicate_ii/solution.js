/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hash = new Map();
    
    for (i = 0; i < nums.length; i++) {
        if (i - hash.get(nums[i]) <= k) {
            return true;
        } else {
            hash.set(nums[i], i)
        }
    }
    return false;
};