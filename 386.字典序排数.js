/*
 * @lc app=leetcode.cn id=386 lang=javascript
 *
 * [386] 字典序排数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {

  const result = [];

  // 将start到end的之间的每个整数推送到结果数组
  // 并在达到end或n时停止递归
  function pushFromTo( start, end ) {
    while (start <= end && start <= n) {
      result.push(start);

      // 优先递归字典序的整数
      pushFromTo(start * 10, start * 10 + 9);

      start++;
    }
  }

  // 开始递归
  pushFromTo(1, 9);

  return result;

};
// @lc code=end

