/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let total = 0;
    let x = 0;
    let y = mat.length - 1;

    for (let i = 0; i < mat.length; i++) {
        total += mat[i][i];
        total += mat[x][y];
        x++;
        y--;
    }

    if (mat.length % 2 !== 0) {
        let middle = Math.floor(mat.length / 2);
        total -= mat[middle][middle];
    }
    
    return total;
};