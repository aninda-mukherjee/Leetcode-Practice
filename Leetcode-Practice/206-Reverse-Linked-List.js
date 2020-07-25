// Reverse a singly linked list.
// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

function reverseList(ListNode) {

    let current = ListNode;
    if (!current) {
        return current;
    }

    let currentPre = ListNode.next;
    current.next = null;

    while (currentPre) {
        let temp = currentPre.next;
        curPre.next = current;
        current = currentPre;
        currentPre = temp;
    }

   


    return true;
};

console.log(reverseList([1,2,3,4,5]));