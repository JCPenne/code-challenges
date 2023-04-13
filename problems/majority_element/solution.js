/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let dictionary = {};

    nums.forEach((num) => {
        if (dictionary[num]) {
            dictionary[num] += 1;
        }
        else {
            dictionary[num] = 1;
        }
    })

    for (entry in dictionary) {
        if (dictionary[entry] > (nums.length / 2)) {
            return entry;
        }
    }
};