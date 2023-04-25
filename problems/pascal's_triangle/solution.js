/**
 * @param {number} numRows
 * @return {number[][]}
 */

 /*
 triangle = [[1]];
i = 1;
p1 = 1
p2 = 0;
 newRow = [1];

*/

var generate = function(numRows) {
    let triangle = [[1]];
    if (numRows === 1) return triangle;

    let i = 1;
    while (i < numRows) {
        let newRow = [];
        let latestRow = triangle.at(-1);
        let p1 = 0;
        let p2 = 1;

        if (p1 === 0) {
            newRow.push(1);
        }

        while (p2 < latestRow.length) {
            newRow.push(latestRow[p1] + latestRow[p2]);
            p1++;
            p2++;
        } 

        if (p2 === latestRow.length) {
            newRow.push(1);
        }

        p1++;
        p2++;
        i++;
        triangle.push(newRow);
    } 

    return triangle
};