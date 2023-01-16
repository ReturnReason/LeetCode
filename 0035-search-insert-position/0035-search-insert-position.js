/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target < nums[0]) return 0;
    if(target > nums[nums.length - 1]) return nums.length;
    
    let s = 0;
    let l = nums.length - 1;
    let m;
    
    while(s <= l){
        if(nums[m] === target) return m;
        
        m = Math.floor((s + l) / 2);
        
        if(target < nums[m]){
            l = m - 1;
        } else if(target > nums[m]){
            s = m + 1;
        } else return m;
    }
    
    return nums[m] < target ? m + 1 : m;
};