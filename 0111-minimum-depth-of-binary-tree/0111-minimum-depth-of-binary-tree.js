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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
  
    const q = [];
    let d = 1;
    q.push({item : root, d});

    while(q.length){
      const {item, d} = q.shift();
      if(!item.left && !item.right) return d;
      
      item.left && q.push({item : item.left, d : d + 1});
      item.right && q.push({item : item.right, d : d + 1});
    }
  
};