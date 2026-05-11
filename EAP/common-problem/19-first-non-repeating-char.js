/**
 * Find the first non-repeating character in a string
 * Given a string, return the first character that does not repeat.
 */

function firstNonRepeatingChar(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

function firstNonRepeatingCharMap(str) {
  const charCount = new Map();

  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
}

function firstNonRepeatingCharIndex(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstNonRepeatingChar('leetcode'));
console.log(firstNonRepeatingChar('loveleetcode'));
console.log(firstNonRepeatingChar('aabb'));
console.log(firstNonRepeatingChar('a'));
console.log(firstNonRepeatingChar('abcabc'));
console.log(firstNonRepeatingChar('aabbcc'));
console.log(firstNonRepeatingChar('programming'));

console.log(firstNonRepeatingCharIndex('leetcode'));
console.log(firstNonRepeatingCharIndex('loveleetcode'));

module.exports = {
  firstNonRepeatingChar,
  firstNonRepeatingCharMap,
  firstNonRepeatingCharIndex,
};
