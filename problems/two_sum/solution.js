/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const result = [];

   nums.map((num1,index1) => {
       nums.map((num2,index2) => {
           if (index1 !== index2 && num1 + num2 === target && !result.includes(index2)) {
               result.push(index1,index2);
           }
       })
   })
   return result;
};