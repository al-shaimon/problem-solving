/**
 * Find the missing elements in a consecutive sequence
 * Given an unsorted array of numbers that should form a consecutive sequence, return all missing numbers.
 */

function findMissingInSequence(arr) {
  if (arr.length === 0) return [];

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const set = new Set(arr);
  const missing = [];

  for (let i = min + 1; i < max; i++) {
    if (!set.has(i)) {
      missing.push(i);
    }
  }

  return missing;
}

function findMissingInSequenceGrouped(arr) {
  if (arr.length === 0) return [];

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const set = new Set(arr);
  const missing = [];
  let start = null;

  for (let i = min + 1; i < max; i++) {
    if (!set.has(i)) {
      if (start === null) {
        start = i;
      }
    } else {
      if (start !== null) {
        if (start === i - 1) {
          missing.push(start);
        } else {
          missing.push(`${start}-${i - 1}`);
        }
        start = null;
      }
    }
  }

  if (start !== null) {
    if (start === max - 1) {
      missing.push(start);
    } else {
      missing.push(`${start}-${max - 1}`);
    }
  }

  return missing;
}

console.log(findMissingInSequence([1, 2, 4, 5, 6, 8]));
console.log(findMissingInSequence([10, 12, 11, 15]));
console.log(findMissingInSequence([1, 2, 3, 4, 5]));
console.log(findMissingInSequence([5, 10]));
console.log(findMissingInSequence([1, 5]));

module.exports = { findMissingInSequence, findMissingInSequenceGrouped };
