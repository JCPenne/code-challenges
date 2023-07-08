/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let largestElement = Math.max(...candies)

    candies.map((child,index) => {
        if (child + extraCandies >= largestElement) {
            candies[index] = true
        } else {
            candies[index] = false
        }
    })
    return candies
};