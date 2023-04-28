/*
 * @lc app=leetcode.cn id=2423 lang=javascript
 *
 * [2423] 删除字符使频率相同
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
 
  const hashmap = new Map()
  for (let i = 0; i < word.length; i++) {
    hashmap.set(word[i], (hashmap.get(word[i]) || 0) + 1)
  }

  let output = false

  hashmap.forEach((value, key) => {
    const newMap = new Map(hashmap)
    if (value === 1) {
        newMap.delete(key)
    } else {
        newMap.set(key, newMap.get(key) - 1)
    }
    if (new Set([...newMap.values()]).size === 1) output = true
  })
  return output

};
// @lc code=end

