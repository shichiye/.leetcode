/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []

  const dfs = (candidates, target, path, sum, startIndex) => {
    if (sum > target) return
    if (sum === target) {
      result.push([...path])
      return
    }

    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i])
      dfs(candidates, target, path, sum + candidates[i], i)
      path.pop()
    }
  }

  dfs(candidates, target, [], 0, 0)

  return result

};
// @lc code=end

