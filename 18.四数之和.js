/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

  let n = nums.length;

  let results = [];

  if (n < 4) {
    return results;
  }

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 3; i ++) {
    
    for (let j = i + 1; j < n - 2; j ++) {

      let k = j + 1;
      let m = n - 1;

      while (k < m) {

        let sum = nums[i] + nums[j] + nums[k] + nums[m];

        if (sum === target) {
          results.push([nums[i], nums[j], nums[k], nums[m]]);
          while (nums[k] === nums[k + 1]) k++;
          while (nums[m] === nums[m - 1]) m--;

          k++;
          m--;
        } else if (sum > target) {
          m--;
        } else {
          k++;
        }
      }

      while (nums[j] == nums[j + 1]) j++

    }

    while (nums[i] == nums[i + 1]) i++

  }
  return results;

};
// @lc code=end

