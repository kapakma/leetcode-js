/**
 * 121. Best Time to Buy and Sell Stock
 *
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function(prices) {
    let min = prices[0],
        max = 0;

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        if (price < min) {
            min = price;
        }
        else {
            max = Math.max(max, price - min);
        }
    }
    return max;
};
