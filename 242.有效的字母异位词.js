/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;
  const counts = {};
  for (const c of s) {
    counts[c] = (counts[c] || 0) + 1;
  }
  for (const c of t) {
    if (!counts[c]) return false;
    counts[c]--;
  }

  return true;
};
// @lc code=end

