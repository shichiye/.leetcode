/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  if (!root) return root

  if (root.val < low) {
    node = trimBST(root.right, low, high)
    return node
  }

  if (root.val > high) {
    node = trimBST(root.left, low, high)
    return node
  }

  root.left = trimBST(root.left, low, high)
  root.right = trimBST(root.right, low, high)

  return root
};
// @lc code=end

