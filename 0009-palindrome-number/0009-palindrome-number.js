/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // Follow up: Could you solve it without converting the integer to a string?
  if(x < 0) return false;
  if(x < 10) return true;
    
  const arr = [];
    
  while(x >= 10){
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }
    
  arr.push(x);
    
  for(let i = 0; i < arr.length / 2; i++){
    if(arr[i] !== arr[arr.length - 1 - i]) return false;
  }
    
  return true;
};