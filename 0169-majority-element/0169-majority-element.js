/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const ret = new Map(); 
  const len = Math.floor(nums.length / 2);
  
  for(let n of nums){
    ret.set(n, ret.get(n) + 1 || 1);
    if(ret.get(n) > len) return n;
  }
};