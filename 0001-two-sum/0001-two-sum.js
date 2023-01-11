/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const ps = {};
    const ret = [];
    
    for(let i = 0; i < nums.length; i++){
        const findTargat = target - nums[i];
        
        if(ps[findTargat]){
         ret.push(nums.indexOf(findTargat));
         ret.push(i);
         return ret;
        }
        
        ps[nums[i]] = (ps[nums[i]] || 0 ) + 1;
    }
    
    return ret;
};
