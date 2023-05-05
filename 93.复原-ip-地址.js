/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = []
  const path = []

  const backtracking = (startIndex) => {
    const len = path.length
    if(len > 4) return
    if(len === 4 && startIndex === s.length) {
      result.push(path.join("."))
      return
  }

    for (let i = startIndex; i < s.length; i++) {
      const str = s.slice(startIndex, i + 1)
      if (str.length > 3 || +str > 255) break
      if (str.length > 1 && str[0] == '0') break
      path.push(s.slice(startIndex, i + 1))
      backtracking(i + 1)
      path.pop()
    }
  }

  backtracking(0)

  return result
};
// @lc code=end

