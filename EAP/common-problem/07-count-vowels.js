/**
 * Count the number of vowels in a string
 * Write a function to count all vowels (a, e, i, o, u) in a given string.
 */

function countVowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let count = 0;

  for (let char of str) {
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}

function countVowelsRegex(str) {
  const matches = str.match(/[aeiouAEIOU]/g);
  return matches ? matches.length : 0;
}

function countVowelsFilter(str) {
  return str
    .toLowerCase()
    .split('')
    .filter((char) => 'aeiou'.includes(char)).length;
}

console.log(countVowels('hello'));
console.log(countVowels('JavaScript'));
console.log(countVowels('AEIOUaeiou'));
console.log(countVowels('bcdfg'));
console.log(countVowels(''));
console.log(countVowels('a e i o u'));

module.exports = { countVowels, countVowelsRegex, countVowelsFilter };
