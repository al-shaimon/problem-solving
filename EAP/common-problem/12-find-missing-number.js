/**
 * Find the missing number in an array
 * Given an array of numbers from 1 to n with one number missing, find the missing number efficiently.
 */

function findMissingNumber(arr) {
  const n = arr.length + 1;

  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

function findMissingNumberXOR(arr) {
  const n = arr.length + 1;
  let xorAll = 0;
  let xorArray = 0;

  for (let i = 1; i <= n; i++) {
    xorAll ^= i;
  }

  for (let num of arr) {
    xorArray ^= num;
  }

  return xorAll ^ xorArray;
}

function findMissingNumberSet(arr) {
  const n = arr.length + 1;
  const set = new Set(arr);

  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}

console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([1, 3, 4, 5]));
console.log(findMissingNumber([2, 3, 4, 5]));
console.log(findMissingNumber([1]));
console.log(findMissingNumber([3, 1, 2, 5]));

console.log(findMissingNumberXOR([1, 2, 3, 5]));
console.log(findMissingNumberSet([1, 2, 3, 5]));

module.exports = { findMissingNumber, findMissingNumberXOR, findMissingNumberSet };
