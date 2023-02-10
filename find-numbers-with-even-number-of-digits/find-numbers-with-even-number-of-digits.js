/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.filter((n) => (n.toString().length) % 2 === 0 ).length;
};