/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  const ret = [];
  
  let n = 1;
  let i = 0;
  
  while(k){
    if(arr[i] === n){
      i++;
      n++;
    } else {
      ret.push(n++);
      k--;
    }
  }
  
  return ret.at(-1);
};