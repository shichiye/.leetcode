/*
 * @lc app=leetcode.cn id=1750 lang=javascript
 *
 * [1750] 删除字符串两端相同字符后的最短长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  const n = s.length

  let left = 0
  let right = n - 1

  while (left < right) {
    if (s.charAt(left) != s.charAt(right)) break

    left++
    right--

    while (left <= right && s.charAt(left - 1) == s.charAt(left)) left++
    while (left <= right && s.charAt(right) == s.charAt(right + 1)) right--
    
  }

  return right - left + 1
};
// @lc code=end

