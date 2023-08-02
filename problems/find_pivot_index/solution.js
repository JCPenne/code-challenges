/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let currentIndex = 0;
    let prefix = 0;
    let suffix = nums.reduce((accumulator, current) => accumulator + current) - nums[0];

    while (currentIndex < nums.length) {
        if (prefix === suffix) return currentIndex;
        
        prefix += nums[currentIndex];
        currentIndex++
        suffix -= nums[currentIndex];
    }
    return -1;
}










    // while (left !== right) {






        // if (Math.abs(leftSum) < Math.abs(rightSum)) {
        //     left++;
        //     leftSum += nums[left];
        //     console.log('left smaller',left,leftSum)
        // }
        // if (Math.abs(rightSum) < Math.abs(leftSum)) {
        //     right--;
        //     rightSum += nums[right];
        //     console.log('right smaller',right,rightSum)
        // }
        // if (Math.abs(leftSum) === Math.abs(rightSum)) {
        //     if (right - left > 2) {
        //         right--;
        //         rightSum += nums[right];
        //         continue;
        //     }
        //     if (right - left === 2) return left + 1;
        //     if (left === 0) return left;
        //     if (left + 1 === right) return -1;
        // }
    // }
    // return -1;