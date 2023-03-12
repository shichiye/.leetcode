/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  let minDepth = 0;

  if (!root) return minDepth;

  const queue = [root];

  while (queue.length) {
    minDepth++;
    let len = queue.length;

    while (len--) {
      let cur = queue.shift();

      if (!cur.left && !cur.right) return minDepth;

      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
  }

  return minDepth;
};
// @lc code=end
