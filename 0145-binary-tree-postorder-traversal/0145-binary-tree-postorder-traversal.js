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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if(!root) return [];  
  
  const ret = [];
  function r(node){
    if(!node) return;
    
    node.left && r(node.left);
    node.right && r(node.right);

    return ret.push(node.val);
  }
  
  r(root);
  
  return ret;
};