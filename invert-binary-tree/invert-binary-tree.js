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
 * @return {TreeNode}
 */

// Strategy (recursive, depth-first search):
//// 1. If left and right are null, return (base case)
//// 2. Swap left and right of node passed in
//// 3. call invertTree on currentNode.left and currentNode.right


var invertTree = function(root) {
    if (root.left === null || root.right === null) return

    const tempHolder = root.left
    root.left = root.right
    root.right = tempHolder

    invertTree(root.left)
    invertTree(root.right)

    return root
};

console.log(invertTree({
    value: 4,
    left: {
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    },
    right: {
      value: 7,
      left: {
        value: 6,
        left: null,
        right: null
      },
      right: {
        value: 9,
        left: null,
        right: null
      }
    }
}))

// Time Complexity: O(n) where n is number of nodes in tree, because the 
// function InvertTree runs once for each node in the tree.

// Space Complexity: O(log(n)), because call stack reaches log(n+1) at maximum
// recursion depth.