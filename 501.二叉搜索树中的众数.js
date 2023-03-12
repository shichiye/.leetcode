/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function(root) {

  let result = []

  let pre = null

  let count = 0

  let maxCount = Number.MIN_SAFE_INTEGER

  const traversal = (root) => {
    if (!root) return

    traversal(root.left)

    if (pre == null) {
      count = 1
    } else if (pre.val === root.val) {
      count ++
    } else {
      count = 1
    }

    pre = root

    if (count == maxCount) {
      result.push(root.val)
    } else if (count > maxCount) {
      result = []
      result.push(root.val)
      maxCount = count
    }


    traversal(root.right)
  }

  traversal(root)

  return result
};
// @lc code=end

