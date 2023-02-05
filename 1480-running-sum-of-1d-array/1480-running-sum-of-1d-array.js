/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const psum = [];
  psum.push(nums[0]);
  
  for(let i = 1; i < nums.length; i++){
    psum.push(nums[i] + psum[i-1]);  
  }
  
  return psum;
};