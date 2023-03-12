/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const counts = [];
  const result = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    counts[freq] = (counts[freq] || new Set()).add(num);
  }

  for (let i = counts.length - 1; i >= 0; i--) {
    if (counts[i]) result.push(...counts[i]);
    if (result.length === k) break;
  }

  return result;
};
// @lc code=end
