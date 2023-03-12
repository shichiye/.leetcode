/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const result = []

  const getPath = (node, curPath) => {
    if (!node.left && !node.right) {
      curPath += node.val
      result.push(curPath)
    }

    curPath += `${node.val}->`
    if (node.left) getPath(node.left, curPath)
    if (node.right) getPath(node.right, curPath)
  }
  getPath(root, '')

  return result
};
// @lc code=end

