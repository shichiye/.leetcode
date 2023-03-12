/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
  // let result = 0
  // if (!root) return result

  // const queue = [root]

  // while (queue.length) {

  //   let len = queue.length

  //   while (len --) {
  //     const node = queue.shift()
  //     result ++
  //     if (node.left) queue.push(node.left)
  //     if (node.right) queue.push(node.right)
  //   }
  // }

  // return result



  const getNodeSum = (root) => {
    if (root == null) {
      return 0
    }

    const leftNum = getNodeSum(root.left)
    const rightNum = getNodeSum(root.right)

    return leftNum + rightNum + 1
  }

  return getNodeSum(root)
};
// @lc code=end

