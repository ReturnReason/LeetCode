/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let cnt = 0;
    costs.sort((a, b) => a - b);
    
    let i = 0;
    while(coins >= 0){
        if(coins - costs[i] >= 0){
            coins -= costs[i++];
            cnt++;    
        } else break;
    }
    
    return cnt;
};