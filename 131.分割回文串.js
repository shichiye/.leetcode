/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */

const isPalindrome = (s, l, r) => {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false
  }

  return true
}

var partition = function(s) {

  const result = []
  const path = []

  const backtracking = (startIndex) => {
    if (startIndex >= s.length) {
      result.push([...path])
      return
    }

    for (let i = startIndex; i < s.length; i++) {
      if (!isPalindrome(s, startIndex, i)) continue
      path.push(s.slice(startIndex, i + 1))
      backtracking(i + 1)
      path.pop()
    }
  }

  backtracking(0)

  return result
};
// @lc code=end

