/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let arr = num.toString().split('');

    if (arr.length === 1) {
        return arr[0]
    }

    let sum = arr.reduce((count,element) => Number(count) + Number(element));

    return addDigits(sum);
};