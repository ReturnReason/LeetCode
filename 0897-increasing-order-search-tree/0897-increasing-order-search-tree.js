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
var increasingBST = function(root) {
  if(!root) return;
  
  let newNode = new TreeNode();
  let current = newNode;
  
  function rc(node){
    if(!node) return;
    
    rc(node.left);
    node.left = null;
    current.right = node;
    current = current.right;
    rc(node.right);
  }
  
  rc(root);
  
  return newNode.right;
};