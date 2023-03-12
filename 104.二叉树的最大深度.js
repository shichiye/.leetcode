/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {

  // 层序递归
  // let depth = 0

  // if (!root) return depth

  // const queue = [root]

  // while (queue.length) {
  //   depth++

  //   let len = queue.length

  //   while (len --) {
  //     let cur = queue.shift()
  //     if (cur.left) queue.push(cur.left)
  //     if (cur.right) queue.push(cur.right)
  //   }
  // }

  // return depth

  if (!root) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1

};
// @lc code=end

