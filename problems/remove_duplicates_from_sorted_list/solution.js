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
var deleteDuplicates = function(head) {
    if (!head) return head;
    let p1 = head;

    while (p1.next) {
        let p2 = p1.next;
        if (p1.val === p2.val) {
            p1.next = p1.next.next;
        } else {
            p1 = p2;
        }
    }
    return head;
};