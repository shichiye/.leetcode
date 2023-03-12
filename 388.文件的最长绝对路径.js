/*
 * @lc app=leetcode.cn id=388 lang=javascript
 *
 * [388] 文件的最长绝对路径
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  let dir = input.split('\n');
  console.log(dir)
  let max = 0;
  let length = [];
  let depth = 0;

  for (let i = 0; i < dir.length; i ++) {
    depth = dir[i].lastIndexOf('\t') + 1;
    if (dir[i].includes('.')) {
      let fileLength = dir[i].length - depth;
      max = Math.max((length[depth - 1] + 1 || 0) + fileLength, max );
    } else {
      length[depth] = dir[i].length - depth + (length[depth - 1] + 1 || 0);
    }
  }

  return max
};
// @lc code=end
