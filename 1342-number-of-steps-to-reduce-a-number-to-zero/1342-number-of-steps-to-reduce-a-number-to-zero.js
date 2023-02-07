/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let cnt = 0;
  
  while(num){
    if(num % 2) num -= 1;
    else num /= 2;
    cnt++;
  }
  
  return cnt;
};