/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {

  const result = []

  if (!root) return result

  const stack = [root]

  while (stack.length) {
    const cur = stack.pop()
    result.push(cur.val)
    if (cur.right) stack.push(cur.right)
    if (cur.left) stack.push(cur.left)
  }

  return result
};
// @lc code=end

var preorderTraversalRecursion = function (root) {
  const result = [];

  const traversal = function (root) {
    if (!root) return;

    result.push(root.val);
    traversal(root.left);
    traversal(root.right);
  };

  traversal(root);

  return result;
};

