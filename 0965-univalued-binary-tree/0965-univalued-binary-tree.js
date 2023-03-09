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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if(!root) return true;
  
    function rc(node, val){
      if(!node) return true;
      if(node.val !== val) return false;
      
      return rc(node.left, val) && rc(node.right, val)
    }
  
    return rc(root, root.val);
};