/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  let maxValue = 0;
  let maxValueIndex = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > maxValue) {
      maxValue = nums[index];
      maxValueIndex = index;  
    }
    
  }

  const root = new TreeNode(maxValue);

  if (maxValueIndex > 0) {
    root.left = constructMaximumBinaryTree(nums.slice(0, maxValueIndex));
  }
  if (maxValueIndex < (nums.length - 1)) {
    root.right = constructMaximumBinaryTree(nums.slice(maxValueIndex + 1));
  }

  return root;
};
// @lc code=end

