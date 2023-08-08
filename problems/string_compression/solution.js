/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let p1 = 0;
    let p2 = p1 + 1;

    while (p2 <= chars.length) {
        // console.log('p1',p1);
        // console.log('p2',p2);

        if (chars[p1] !== chars[p2] || p2 === chars.length) {
            // console.log('chars before splice',chars);
            let splitCount = (p2 - p1).toString().split('');

            if (p2 - p1 >= 10) {
                chars.splice(p1,(p2 - p1),chars[p1],...splitCount);
                p2 = p1 + splitCount.length;
            }   else if (p2 - p1 > 1) {
                    chars.splice(p1,(p2 - p1),chars[p1],`${p2 - p1}`);
                    p2 = p1 + 2;
                } 
            // console.log('chars after splice',chars);
            // console.log('pointers before reassignment',p1,p2);
            p1 = p2;
            p2 = p1 + 1;
            // console.log('pointers after reassignment',p1,p2);
        }
        if (chars[p1] === chars[p2]) p2++;
    }
    return chars.length;
};

/* 

If characters are not the same, move pointers up and replace the chunk in chars with the original character and count
original character would be chars[p1] count would be p2;
*/