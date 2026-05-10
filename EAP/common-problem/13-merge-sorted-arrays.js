/**
 * Merge two sorted arrays
 * Write a function to merge two sorted arrays into one sorted array without using sort().
 */

function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSortedArraysConcat(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function mergeSortedArraysConcise(arr1, arr2) {
  const result = [];
  let [i, j] = [0, 0];

  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length) {
      result.push(...arr2.slice(j));
      break;
    }
    if (j >= arr2.length) {
      result.push(...arr1.slice(i));
      break;
    }
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeSortedArrays([1, 5, 9], [2, 3, 4]));
console.log(mergeSortedArrays([], [1, 2, 3]));
console.log(mergeSortedArrays([1, 2, 3], []));
console.log(mergeSortedArrays([1], [1]));

module.exports = { mergeSortedArrays, mergeSortedArraysConcat, mergeSortedArraysConcise };
