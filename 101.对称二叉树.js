/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  
  // 递归
  // if (!root) return true

  // const compare = (left, right) => {
  //   if (left != null && right == null) return false
  //   else if (left == null && right != null) return false
  //   else if (left == null && right == null) return true
  //   else if (left.val != right.val) return false
  //   else return compare(left.left, right.right) && compare(left.right, right.left)
  // }

  // return compare(root.left, root.right)

  // 迭代
  if (!root) return true
  const stack = []
  stack.push(root.left, root.right)

  while (stack.length) {
    let rightNode = stack.pop()
    let leftNode = stack.pop()

    if (!rightNode && !leftNode) {
      continue
    }

    if (!leftNode || !rightNode || (leftNode.val != rightNode.val)) {
      return false
    }
    stack.push(leftNode.left)
    stack.push(rightNode.right)
    stack.push(leftNode.right)
    stack.push(rightNode.left)
  }

  return true
};
// @lc code=end
