/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = []
  const path = []

  const backtracking = (target, sum, startIndex) => {
    if (sum > target) return
    if (sum === target) {
      result.push([...path])
      return
    }

    for (let i = startIndex; i < candidates.length; i++) {
      if (i != startIndex && candidates[i] === candidates[i - 1]) continue
      if (sum + candidates[i] > target) return
      path.push(candidates[i])
      backtracking(target, sum + candidates[i], i + 1)
      path.pop()
    }
  }

  candidates.sort((a, b) => a - b)

  backtracking(target, 0, 0)

  return result
};
// @lc code=end

