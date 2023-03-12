/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let set = new Set()
  
  while (n !== 1 && !set.has(n)) {
    set.add(n)
    n = sumofSquares(n)
  }

  return n == 1 ? true : false
};

function sumofSquares(numString) {
  return numString.toString().split('').reduce(function(sum, num) {
    return sum + num ** 2
  }, 0)
}
// @lc code=end

