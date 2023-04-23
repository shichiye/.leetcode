/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {


  const result = []
  const path = []

  const dfs = (target, sum, startIndex) => {
    if (sum > target) return
    if (sum === target) {
      result.push(path.slice())
      return
    }

    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i])
      dfs(target, sum + candidates[i], i)
      path.pop()
    }
  }

  candidates.sort((a, b) => a - b)

  dfs(target, 0, 0)

  return result
};
// @lc code=end

