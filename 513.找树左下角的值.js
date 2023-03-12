/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {

  let result = root.val

  const queue = [root]

  while (queue.length) {

    let len = queue.length

    let node = null

    let firstFlag = true

    while (len --) {
      node = queue.shift()
      if (firstFlag) {
        result = node.val
        firstFlag = false
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return result


};
// @lc code=end

