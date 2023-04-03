const Input1 = [2, 7, 11, 15];
const target1 = 9;
const Input2 = [3, 2, 4];
const target2 = 6;
const Input3 = [3, 3];
const target3 = 6;

function twoSum(nums, target) {
  const prevMap = {}; // value: index

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in prevMap) {
      return [prevMap[diff], i];
    }
    prevMap[nums[i]] = i;
  }
}

console.log(twoSum(Input1, target1));
console.log(twoSum(Input2, target2));
console.log(twoSum(Input3, target3));
