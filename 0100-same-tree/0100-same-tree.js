/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === null && q === null) return true;
    if(q === null && p || p === null && q ) return false;
    if(!q && p || q && !p) return false;
    
    if(p.val === q.val && isSameTree(q.left, p.left) && isSameTree(q.right, p.right)) return true;
    else return false;
    
};