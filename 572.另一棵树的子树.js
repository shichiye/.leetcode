/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const isSameTree = (t1, t2) => {
    if (t1 != null && t2 == null) return false;
    else if (t1 == null && t2 != null) return false;
    else if (t1 == null && t2 == null) return true;
    else if (t1.val != t2.val) return false;
    else return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
  };

  // 递归二叉树
  const recursion = (root) => {
    if (root == null) return false;
    if (isSameTree(root, subRoot)) return true;
    return recursion(root.left) || recursion(root.right);
  };

  return recursion(root);
};
// @lc code=end
