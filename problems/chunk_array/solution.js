/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let result = [];
    let temp = [];
    let x = size;
    
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);

        if (i === x - 1 || i === arr.length - 1) {
            result.push(temp);
            temp = [];
            x = x + size;
        }
    }
    return result;
};