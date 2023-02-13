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
var isSymmetric = function(root) {
  if(!root.left && !root.right) return true;
  return check(root.left, root.right);
};

const check = (l, r) => {
  if(!l && !r) return true;
  if(!l && r || l && !r) return false;
  if(l.val !== r.val) return false;
  return check(l.left, r.right) && check(l.right, r.left);
};