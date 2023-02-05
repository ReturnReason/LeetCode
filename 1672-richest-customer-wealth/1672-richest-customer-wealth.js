/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const ret = accounts.map((ac)=> ac.reduce((a, c) => a + c))
    return Math.max(...ret);
};