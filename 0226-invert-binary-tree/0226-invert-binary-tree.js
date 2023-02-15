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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root;
  
    function rc(root){
      if(!root) return null;
      
      let left = rc(root.right)
      let right = rc(root.left);
      
      root.right = right;
      root.left = left;
      
      return root;
    }
    
  return rc(root);
};