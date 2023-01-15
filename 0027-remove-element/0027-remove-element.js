/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 1 && nums[0] === val) return nums.splice(0);
        
    let start = 0;
    let end = nums.length - 1;
    
    while(start < end){
        if(nums[start] === val){
            nums[start] = nums[end];
            end--;
        } else {
            start++;
        } 
    }
    
    if(nums[start] === val) {
        return start;
    } else {
        return start + 1;
    }
};