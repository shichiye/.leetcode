/*
 * @lc app=leetcode.cn id=2418 lang=javascript
 *
 * [2418] 按身高排序
 */

// @lc code=start
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  const n = names.length

  const map = new Map()
  for (let i = 0; i < n; i++) {
    map.set(heights[i], names[i])
  }

  heights.sort((a, b) => b - a)
  
  const ans = [];
  for (let height of heights) {
    ans.push(map.get(height))
  }
  return ans;
};
// @lc code=end

