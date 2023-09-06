// inputs: two linked lists, L1 and L2
// - L1 and L2 are both sorted
// - number of nodes in range [0, 50]
// - node values in range [-100, 100]
// output: head of newly merged list, still sorted

// class ListNode {
//     constructor(input1, input2=null) {
//         this.value = input1
//         this.next = input2
//     }
// }

// class LinkedList {
//     constructor(head = null) {
//         this.head = head
//     }
// }

function mergeTwoLists(list1, list2) {
    let list = new ListNode(-101),
        head = list

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            list.next = list1
            list1 = list1.next
        } else {
            list.next = list2
            list2 = list2.next
        }
        list = list.next
    }

    if(!list1) list.next = list2
    if(!list2) list.next = list1

    return head.next
}
