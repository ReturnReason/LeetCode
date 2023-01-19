/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const ret = [];
    
    ret[0] = 1;
    ret[1] = 1;
    
    for(let i = 2; i <= n; i++){
        ret.push(ret[i - 1] + ret[i - 2]);   
    }
    
    return ret[n]
};
