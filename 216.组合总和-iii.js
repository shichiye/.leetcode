/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

let result = []
let path = []
var combinationSum3 = function(k, n) {

  result = []

  const backtracking = (k, n, startIndex, sum) => {

    if (sum > n) {
      return
    }

    if (path.length === k) {
      if (sum == n) {
        result.push([...path])
      }
      return
    }

    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      sum += i
      path.push(i)

      backtracking(k, n, i + 1, sum)
      sum -= i
      path.pop()
    }
  }

  backtracking(k, n, 1, 0)

  return result

};
// @lc code=end

