/**
 * Rotate a string by k positions
 * Write a function to rotate a string to the right by k positions.
 * Example: "hello", k=2 → "lohel"
 */

function rotateStringByK(str, k) {
  if (str.length === 0) return str;

  k = k % str.length;

  return str.slice(-k) + str.slice(0, -k);
}

function rotateStringByKManual(str, k) {
  if (str.length === 0) return str;

  k = k % str.length;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str[(i - k + str.length) % str.length];
  }

  return result;
}

function rotateStringByKArray(str, k) {
  if (str.length === 0) return str;

  k = k % str.length;
  const arr = str.split('');

  arr.reverse();
  arr
    .splice(0, k)
    .reverse()
    .forEach((char, i) => arr.splice(i, 0, char));
  arr
    .splice(k)
    .reverse()
    .forEach((char, i) => arr.splice(k + i, 0, char));

  return arr.join('');
}

console.log(rotateStringByK('hello', 2));
console.log(rotateStringByK('hello', 0));
console.log(rotateStringByK('hello', 5));
console.log(rotateStringByK('hello', 7));
console.log(rotateStringByK('abcde', 3));
console.log(rotateStringByK('a', 1));

module.exports = { rotateStringByK, rotateStringByKManual, rotateStringByKArray };
