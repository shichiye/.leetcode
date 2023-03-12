/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

  const compare = (t1, t2) => {
    if (t1 == null && t2 != null) return false
    else if (t1 != null && t2 == null) return false
    else if (t1 == null && t2 == null) return true
    else if (t1.val !== t2.val) return false
    else return compare(t1.left, t2.left) && compare(t1.right, t2.right);
  };

  return compare(p, q);
};
// @lc code=end
