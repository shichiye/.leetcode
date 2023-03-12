/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  let words = sentence.split(' ');

  let vowel = 'aeiouAEIOU';


  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    const firstChar = word[0];

    if (!vowel.includes(firstChar)) {
      word = word.slice(1) + firstChar;
    }

    word += 'ma';

    for (let j = -1; j < i; j ++) {
      word += 'a';
    }

    words[i] = word;
  }

  return words.join(' ');
};
// @lc code=end

