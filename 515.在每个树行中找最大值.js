/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
  const result = []

  if (!root) return result

  const queue = [root]

  while (queue.length) {
    let len = queue.length
    let maxValue = Number.MIN_SAFE_INTEGER
    while (len --) {
      let cur = queue.shift()
      if (cur.val > maxValue) maxValue = cur.val
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    result.push(maxValue)
  }

  return result;
};
// @lc code=end

