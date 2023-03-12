/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

let result = []
let path = []

var letterCombinations = function (digits) {

  if (digits.length == 0) return []

  result = []

  const digitsMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]


  const backtracking = (digits, index) => {
    if (path.length == digits.length) {
      result.push(path.join(""))
      return
    }

    for (const v of digitsMap[digits[index]]) {
      path.push(v) 
      backtracking(digits, index + 1)
      path.pop()
    }
  }

  backtracking(digits, 0)

  return result

};
// @lc code=end

