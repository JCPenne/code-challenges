const arrOne = [1, 2, 3, 1];
const arrTwo = [1, 2, 3, 4];
const arrThree = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

function checkForDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(checkForDuplicates(arrOne)); // true
console.log(checkForDuplicates(arrTwo)); // false
console.log(checkForDuplicates(arrThree)); // true
