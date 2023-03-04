/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    return rc(root1, root2);

    function rc(n1, n2){
      if(!n1 && !n2) return null;
      if(!n1) return n2;
      if(!n2) return n1;
      
      n1.val = n1.val + n2.val;
      n1.left = rc(n1.left, n2.left);
      n1.right = rc(n1.right, n2.right);
      
      return n1;
    }
};