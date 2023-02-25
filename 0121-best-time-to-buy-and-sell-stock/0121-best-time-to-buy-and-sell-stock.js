/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ret = 0;
  let min = prices[0];
  
  for(let i = 1; i < prices.length; i++){
    ret = Math.max(prices[i] - min, ret);
    if(min > prices[i]) min = prices[i];
  }
  
  return ret;
};