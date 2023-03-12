/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let result = 0;
  
    function rc(node){
      if(!node) return;
      
      if(node.val < low){
        rc(node.right);
      } else if (node.val > high){
        rc(node.left);
      } else {
        result += node.val;
        rc(node.left);
        rc(node.right);
      }
    }
  
  rc(root);
  return result;
};