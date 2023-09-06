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

// Building example cases for testing:
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

    // Initialize new list to store output.
    // It starts with a placeholder node:
    const mergedList = {
        // Value is set to -101 because constraints state the values can be
        // between -100 and 100.
        value: -101,
        next: null
    }

    // Initialize pointer to move along new list:
    let current = mergedList

    // Use while loop to iterate through both input lists
    // simultaneously:
    while (list1 !== null && list2 !== null) {
        // Whichever node has the lower value, append that
        // node to the output list:
        if (list1.value <= list2.value) {
            // Append new node to output list at `current` node.
            // Note that we append the whole node, not just its value:
            current.next = list1
            // Iterate to next node in list 1:
            // (Note! At end of list, `list1.next` will be `null`, which is
            // why the while loop has the conditions it does. So when
            // we set `list1 ` to `null`, we end the loop.)
            list1 = list1.next
        } else {
            // Same as other case, except with list2:
            current.next = list2
            list2 = list2.next
        }

        // Either way, move the pointer to the next node in mergedList
        console.log("current:", current)
        console.log("mergedList:", mergedList)
        console.log("list1:", list1)
        console.log("list2:", list2)
        current = current.next
    }

    // If there's anything remaining in either list, append it to the
    // output list at current node:
    if (list1 !== null) {
        current.next = list1
    } else {
        current.next = list2
    }

    return mergedList.next
}

mergeTwoLists(list1, list2)