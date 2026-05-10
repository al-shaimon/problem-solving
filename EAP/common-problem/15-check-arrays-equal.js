/**
 * Check if two arrays are equal
 * Write a function to check whether two arrays contain the same elements, regardless of order.
 */

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return JSON.stringify([...arr1].sort()) === JSON.stringify([...arr2].sort());
}

function areArraysEqualFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequency = {};

  for (let num of arr1) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  for (let num of arr2) {
    if (!frequency[num]) {
      return false;
    }
    frequency[num]--;
  }

  return Object.values(frequency).every((count) => count === 0);
}

function areArraysEqualSet(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  if (set1.size !== set2.size) {
    return false;
  }

  for (let item of set1) {
    if (!set2.has(item)) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 2, 3], [1, 2, 4]));
console.log(areArraysEqual([1, 1, 2], [2, 1, 1]));
console.log(areArraysEqual([], []));
console.log(areArraysEqual([1], [1, 2]));

console.log(areArraysEqualFrequency([1, 2, 3], [3, 2, 1]));
console.log(areArraysEqualFrequency([1, 1, 2], [2, 1, 1]));

module.exports = {
  areArraysEqual,
  areArraysEqualFrequency,
  areArraysEqualSet,
};
