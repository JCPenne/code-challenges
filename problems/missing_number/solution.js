/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const length = nums.length;
  // console.log(`length = ${length}`);
  const arr = [];
  let result = 0;

  for (i = 0; i <= length; i++) {
    arr.push(i);
  }
  // console.log(`arr = ${arr}`);
  // console.log(`nums = ${nums}`);
  for (num of arr) {
    if (!nums.includes(num)) {
      result = num;
    }
  }
  return result;
};