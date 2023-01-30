/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const ret = [0, 1, 1];
  
  for(let i = 3; i <= n; i++){
    ret.push(ret[i - 1] + ret[i - 2] + ret[i - 3]);    
  }
  
  return ret[n];
};