/**
 * @param {number[]} prices
 * @return {number}
 */

// Check if End is greater than start - If not increment End
// Check if End minus Start is greater than Diff - 
// 

var maxProfit = function(prices) {
    let maxProfit = 0;

    let l = 0;
    let r = 1;

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            const currentProfit = prices[r] - prices[l];

            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            };

            r += 1;

        } else {
            l = r;
            r += 1;
        }
    }
    return maxProfit
};