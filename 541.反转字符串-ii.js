/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let n = s.length;

  let strArr = s.split("");


  for (let i = 0; i < n; i += 2 * k) {
    let left = i;
    let right = i + k - 1 > n - 1 ? n - 1 : i + k - 1;

    while (left < right) {
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
      left++;
      right--;
    }

  }

  return strArr.join("");

  
};
// @lc code=end
