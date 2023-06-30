/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let hashMap = {};
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (Object.hasOwn(hashMap, nums[i])) {
            hashMap[nums[i]]++
        } else {
            hashMap[nums[i]] = 0
        };
        const hashValue = hashMap[nums[i]]

        if (result[hashValue]) {
            result[hashValue].push(nums[i])
        } else {
            result[hashValue] = [nums[i]]
        };
    }
    return result;
};