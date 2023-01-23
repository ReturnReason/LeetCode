/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const ret = new Map();
    
    nums.forEach((n) => {
        ret.set(n, (ret.get(n) || 0) + 1);
    })
    
    for(let r of ret){
        if(r[1] === 1) return r[0];
    }
    
};