/**
 * Reverse words in a sentence
 * Write a function to reverse the order of words in a string while keeping the words themselves intact.
 * Example: "Hello World" → "World Hello"
 */

function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

function reverseWordsManual(str) {
  const words = str.split(' ');
  const reversed = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }
  return reversed.join(' ');
}

console.log(reverseWords('Hello World'));
console.log(reverseWords('JavaScript is fun'));
console.log(reverseWords('a'));
console.log(reverseWords('  hello  world  '));

module.exports = { reverseWords, reverseWordsManual };
