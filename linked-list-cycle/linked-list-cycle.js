/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow = head;
  let fast = head?.next?.next;
  
  if(!slow || !fast) return false;
  
  while(slow !== fast){
    if(!fast && !fast) return false;
    slow = slow?.next;
    fast = fast?.next?.next;
  }

  return true;
};