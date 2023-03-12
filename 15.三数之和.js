/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const results = [];

  if (nums.length < 3) return results;

  nums = nums.sort((a, b) => a - b);

  let target = 0;

  for (let i = 0; i < nums.length - 2; i++) {

    if (nums[i] > target) break;


    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]

      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]])


        while (nums[j] === nums[j+1]) j++;
        while (nums[k] === nums[k-1]) k--;

        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }

    while (nums[i] === nums[i + 1]) i++;

    }
  }
  return results;
};
// @lc code=end
