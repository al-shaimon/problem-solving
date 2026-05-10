/**
 * Remove duplicates from a string
 * Write a function to remove duplicate characters from a string while maintaining order.
 */

function removeDuplicates(str) {
  const seen = new Set();
  let result = '';

  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }

  return result;
}

function removeDuplicatesAlt(str) {
  return str
    .split('')
    .filter((char, index) => str.indexOf(char) === index)
    .join('');
}

function removeDuplicatesReduce(str) {
  const seen = {};
  return str.split('').reduce((result, char) => {
    if (!seen[char]) {
      seen[char] = true;
      result += char;
    }
    return result;
  }, '');
}

console.log(removeDuplicates('hello'));
console.log(removeDuplicates('programming'));
console.log(removeDuplicates('aabbcc'));
console.log(removeDuplicates('a'));
console.log(removeDuplicates(''));
console.log(removeDuplicates('abcabc'));

module.exports = { removeDuplicates, removeDuplicatesAlt, removeDuplicatesReduce };
