/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const left = '({['

  const rightMap = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  let stack = []

  for (const c of s) {
    if (left.includes(c)) {
      stack.push(c)
    } else {
      if (rightMap[c] !== stack.pop()) return false 
    }
  }

  return !stack.length
};
// @lc code=end

