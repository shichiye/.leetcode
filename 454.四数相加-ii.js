/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {

  function caclTwoArraySum(arr1, arr2) {
    
    let n = arr1.length
    let map = new Map()
    
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let sum = arr1[i] + arr2[j]
        map.set(sum, map.get(sum) + 1 || 1)
      }
    }

    return map
  }

  let numsA = caclTwoArraySum(nums1, nums2)
  let numsB = caclTwoArraySum(nums3, nums4)

  let sum = 0;

  numsA.forEach((value, key) => {
    let offset = 0 - key
    if (numsB.has(offset)) {
      sum += ( numsA.get(key) * numsB.get(offset) )
    }
  })

  return sum
};
// @lc code=end

