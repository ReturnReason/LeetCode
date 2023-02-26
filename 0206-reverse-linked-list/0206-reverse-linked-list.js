/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let headNode = head;
  let tailNode = null;
  let swap = null;
  
  while(headNode){
    swap = headNode.next;
    headNode.next = tailNode;
    tailNode = headNode;
    headNode = swap;
  }
  
  return tailNode;
};