/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const result = [[],[]];

    result[0] = nums1.filter(number => !nums2.includes(number));
    result[0] = [...new Set(result[0])];

    result[1] = nums2.filter(number => !nums1.includes(number));
    result[1] = [...new Set(result[1])];

    return result;
};