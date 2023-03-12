/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

  if (needle == '' || needle === haystack) return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length - needle.length + 1; i ++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        } else if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }
  return -1;
};
// @lc code=end
