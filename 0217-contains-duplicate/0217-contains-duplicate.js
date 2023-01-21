/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const ret = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(ret.has(nums[i])) return true;
        ret.set(nums[i], 1) ;
    }

    return false;
};