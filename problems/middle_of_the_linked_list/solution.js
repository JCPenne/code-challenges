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
    let length = 0;
    let current = head;

    do {
      length++;
      current = current.next;
    } while (current !== null);
    current = head;
    console.log('length after first do while',length)

    let pointer = 1;
    do {
      console.log('pointer',pointer)
      if (pointer === Math.ceil(length / 2) && length % 2 !== 0) {
        return current
      }
      if (pointer === Math.ceil(length / 2) && length % 2 === 0) {
        return current.next
      }
      else {
        current = current.next;
        pointer++;
      }
    } while (pointer < length && current.next !== null)
};