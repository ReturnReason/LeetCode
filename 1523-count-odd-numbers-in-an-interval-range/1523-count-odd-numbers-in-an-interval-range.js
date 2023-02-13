/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let cnt = 0;
    for(let i = low; i <= high; i++){
        if(i % 2) cnt += 1;
    }
  
  return cnt;
};
