/**
 * Rotate an array by k positions
 * Write a function to rotate an array to the right by k positions without using built-in rotate functions.
 */

function rotateArrayByK(arr, k) {
  if (arr.length === 0) return arr;

  k = k % arr.length;

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateArrayByKSlice(arr, k) {
  if (arr.length === 0) return arr;

  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

function rotateArrayByKManual(arr, k) {
  if (arr.length === 0) return arr;

  k = k % arr.length;
  const result = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    result[(i + k) % arr.length] = arr[i];
  }

  return result;
}

const arr1 = [1, 2, 3, 4, 5];
console.log(rotateArrayByK([...arr1], 2));

const arr2 = [1, 2, 3, 4, 5];
console.log(rotateArrayByK([...arr2], 0));

const arr3 = [1, 2, 3, 4, 5];
console.log(rotateArrayByK([...arr3], 7));

console.log(rotateArrayByKSlice([1, 2, 3, 4, 5], 2));
console.log(rotateArrayByKManual([1, 2, 3, 4, 5], 2));

module.exports = { rotateArrayByK, rotateArrayByKSlice, rotateArrayByKManual };
