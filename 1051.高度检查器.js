/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const sorted = [...heights].sort((a, b) => a - b)
  return heights.reduce((total, _, index) => sorted[index] !== heights[index] ? total + 1 : total, 0)
};
// @lc code=end

