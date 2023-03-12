/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {

  const result = []
  const stack = []
  let cur = root

  while (cur || stack.length) {
    if (cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      result.push(cur.val)
      cur = cur.right
    }
  }

  return result
};
// @lc code=end

var inorderTraversalRecursion = function(root) {
  const result = []

  const traversal = function(root) {
    if (!root) return

    traversal(root.left)
    result.push(root.val)
    traversal(root.right)
  }

  traversal(root)

  return result;
};
