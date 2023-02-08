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
var middleNode = function(head) {
    
  let cnt = 0;
  let current = head;
  while(current){
    current = current.next;
    cnt++;
  }
  
  const m = ~~(cnt / 2) + 1;
  let index = 1;
  current = head;
  while(current){
    if(index === m) break;
    current = current.next;
    index++;
  }
  
  return current;
};