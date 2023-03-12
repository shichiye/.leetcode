/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const ret = [];
  let word = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === " ") {
      word.length > 0 && ret.unshift(word.join(""));
      word = [];
    } else {
      word.push(s.charAt(i));
    }
  }

  word.length > 0 && ret.unshift(word.join(""));
  return ret.join(" ");
};
// @lc code=end
