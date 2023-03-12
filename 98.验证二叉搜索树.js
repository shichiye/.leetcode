/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {

  const arr = []
  
  const traversal = (root) => {
    if (!root) return;

    traversal(root.left);
    arr.push(root.val);
    traversal(root.right);
  }

  traversal(root);

  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= arr[i - 1]) return false
    }
  }

  return true;

};
// @lc code=end

