/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let start = 0;
    let end = 1;
    let lastIdx = 0;
    
    while(end < nums.length){
        if(nums[start] === nums[end]) end++;
        else {
            start++;
            nums[start] = nums[end];
            lastIdx++;
        }
    }
    
    return lastIdx + 1;
};