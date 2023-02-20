/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {  
  let mid = Math.floor(nums.length / 2);
  let start = 0;
  let end = nums.length - 1;

  while(start <= end){
    if(nums[mid] === target) return mid;
    
    mid = Math.floor((end + start) / 2);
    
    if(nums[mid] < target){
      start = mid + 1;
    } else if(nums[mid] > target){
      end = mid - 1;
    }
  }
  
  return nums[mid] < target ? mid + 1 : mid;
};