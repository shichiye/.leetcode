/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 递归
  // if (root == null) return root;
  // [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  // return root;

  // 前序遍历
  if (!root) return root;

  const stack = [root];
  let cur = null;
  while (stack.length) {
    cur = stack.pop()
    if (cur != null) {
      [cur.left, cur.right] = [cur.right, cur.left]
      stack.push(cur.right, cur.left)
    }
  }

  return root;
};
// @lc code=end
