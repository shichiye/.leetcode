/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {

  let result = Number.MAX_SAFE_INTEGER

  let preValue = null

  const traversal = (root) => {
    if (!root) return

    traversal(root.left)

    if (preValue != null) {
      result = Math.min(result, root.val - preValue)
    }
    preValue = root.val

    traversal(root.right)
  }

  traversal(root)

  return result
};
// @lc code=end

