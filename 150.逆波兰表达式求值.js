/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  let result = 0;

  let a, b;

  const evaluate = {
    "+": () => a + b,
    "-": () => a - b,
    "*": () => a * b,
    "/": () => ~~(a / b),
  };

  for (const s of tokens) {
    if (evaluate[s]) {
      b = stack.pop();
      a = stack.pop();
      stack.push(evaluate[s]());
    } else {
      stack.push(~~s);
    }
  }

  return stack[0];
};
// @lc code=end
