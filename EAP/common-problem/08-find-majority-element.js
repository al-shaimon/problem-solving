/**
 * Find the majority element in an array
 * Given an array, find the element that appears more than n/2 times, if it exists.
 */

function findMajorityElement(arr) {
  if (arr.length === 0) return null;

  let candidate = arr[0];
  let count = 0;

  for (let num of arr) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  count = 0;
  for (let num of arr) {
    if (num === candidate) {
      count++;
    }
  }

  return count > arr.length / 2 ? candidate : null;
}

function findMajorityElementHashMap(arr) {
  if (arr.length === 0) return null;

  const map = {};
  const threshold = arr.length / 2;

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
    if (map[num] > threshold) {
      return num;
    }
  }

  return null;
}

console.log(findMajorityElement([3, 2, 3]));
console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(findMajorityElement([1, 2, 3]));
console.log(findMajorityElement([1]));
console.log(findMajorityElement([5, 5, 5, 5, 5, 1, 1]));

module.exports = { findMajorityElement, findMajorityElementHashMap };
