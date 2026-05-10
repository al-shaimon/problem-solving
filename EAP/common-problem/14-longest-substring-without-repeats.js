/**
 * Find the longest substring without repeating characters
 * Given a string, find the length of the longest substring that contains no repeated characters.
 */

function longestSubstringWithoutRepeatingChars(str) {
  const charIndex = {};
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    if (char in charIndex && charIndex[char] >= start) {
      start = charIndex[char] + 1;
    }

    charIndex[char] = end;

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

function longestSubstringWithoutRepeatingCharsActual(str) {
  const charIndex = {};
  let maxLength = 0;
  let maxStart = 0;
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    if (char in charIndex && charIndex[char] >= start) {
      start = charIndex[char] + 1;
    }

    charIndex[char] = end;

    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      maxStart = start;
    }
  }

  return str.substring(maxStart, maxStart + maxLength);
}

console.log(longestSubstringWithoutRepeatingChars('abcabcbb'));
console.log(longestSubstringWithoutRepeatingChars('bbbbb'));
console.log(longestSubstringWithoutRepeatingChars('pwwkew'));
console.log(longestSubstringWithoutRepeatingChars('au'));
console.log(longestSubstringWithoutRepeatingChars('dvdf'));
console.log(longestSubstringWithoutRepeatingChars(''));

console.log(longestSubstringWithoutRepeatingCharsActual('abcabcbb'));
console.log(longestSubstringWithoutRepeatingCharsActual('bbbbb'));
console.log(longestSubstringWithoutRepeatingCharsActual('pwwkew'));

module.exports = {
  longestSubstringWithoutRepeatingChars,
  longestSubstringWithoutRepeatingCharsActual,
};
