/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    if (!root) return result

    const queue = [root]

    while (queue.length) {
      const row = []
      let len = queue.length
      while (len --) {
        let cur = queue.shift()
        row.push(cur.val)
        queue.push(...cur.children)
      }
      result.push(row)
    }

    return result;
};
// @lc code=end

