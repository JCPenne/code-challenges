/**
 * @param {number[]} salary
 * @return {number}
 */

const average = salary => {
  const sortedSalary = salary
    .sort(function (a, b) {
      return a - b;
    })
    .slice(1)
    .slice(0, -1);

  let result = 0;
  for (x of sortedSalary) {
    result += x;
  }
  return result / sortedSalary.length;
};