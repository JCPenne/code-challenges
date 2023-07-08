/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    let flowers = n;
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
            flowerbed[i] = 1;
            flowers -= 1;
        }
        if (flowers <= 0) return true;
    }  
    return false;
};