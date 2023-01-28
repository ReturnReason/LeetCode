/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m;
  let j = n - 1;
  
  while(j >= 0){
    nums1[i++] = nums2[j--];
  }

  nums1.sort((a, b) => a - b);
};


// [1,2,3,0,0,0]
// [2,5,6]

//[1,2,2,0,0,0]
// [3,5,6]