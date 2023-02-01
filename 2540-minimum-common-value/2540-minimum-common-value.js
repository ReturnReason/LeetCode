/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
  const t1 = new Map();
  
  nums1.forEach((n) => {
    if(!t1.get(n)) t1.set(n, 1);
    else t1.set(n, t1.get(n) + 1);
  })
  
  for(let i = 0; i < nums2.length; i++){
    if(t1.get(nums2[i])) return nums2[i];    
  }
  
  return -1;  
};