/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  let result = null;
  
  if(original === target) return cloned;

  rc(original, cloned, target);

  function rc(o, c, t){
    if(!original) return;
    
    if(o.left){
      if(o.left === t) return result = c.left;
      rc(o.left, c.left, t);
    }

    if(o.right){
      if(o.right === t) return result = c.right;
      rc(o.right, c.right, t);
    }
  }

  return result;
};