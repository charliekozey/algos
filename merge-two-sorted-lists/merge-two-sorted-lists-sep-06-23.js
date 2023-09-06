/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const list1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 4,
            next: null
        }
    }
}
const list2 = {
    value: 1,
    next: {
        value: 3,
        next: {
            value: 4,
            next: null
        }
    }
}

function mergeTwoLists(list1, list2) {
    const mergedList = {
        value: -101,
        next: null
    }
    let current = mergedList

    while (list1 !== null && list2 !== null) {
        if (list1.value <= list2.value) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        
        current = current.next
    }

    if (list1 !== null) {
        current.next = list1
    } else {
        current.next = list2
    }

    return mergedList.next
}

mergeTwoLists(list1, list2)