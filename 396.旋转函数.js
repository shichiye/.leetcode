/*
 * @lc app=leetcode.cn id=396 lang=javascript
 *
 * [396] 旋转函数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
  const n = nums.length;

  let f = 0, s = 0;

  for (let i = 0; i < n; i++) {
    f += i * nums[i]
    s += nums[i]
  }

  let ans = f

  for (let i = n - 1; i > 0; i --) {
    f += s - n * nums[i]
    ans = Math.max(f, ans)
  }

  return ans
};
// @lc code=end

