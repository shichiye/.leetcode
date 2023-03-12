/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  const result = [];

  if (!root) return result;

  const stack = [root];
  let cur = null;

  // 中 左 右 -> 右 左 中
  while (stack.length) {
    cur = stack.pop();
    result.push(cur.val);
    if (cur.left) stack.push(cur.left)
    if (cur.right) stack.push(cur.right)
  }

  return result.reverse();

};
// @lc code=end

var postorderTraversalRecursion = function (root) {
  const result = [];

  const traversal = (root) => {
    if (!root) return

    traversal(root.left)
    traversal(root.right)
    result.push(root.val)
    
  }

  traversal(root);

  return result;
};
