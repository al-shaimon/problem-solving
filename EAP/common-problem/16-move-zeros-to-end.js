/**
 * Move all zeros to the end of an array
 * Given an array, move all zeros to the end while maintaining the order of non-zero elements.
 */

function moveZerosToEnd(arr) {
  let writeIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[writeIndex] = arr[i];
      writeIndex++;
    }
  }

  while (writeIndex < arr.length) {
    arr[writeIndex] = 0;
    writeIndex++;
  }

  return arr;
}

function moveZerosToEndNew(arr) {
  const nonZeros = arr.filter((num) => num !== 0);
  const zeros = arr.filter((num) => num === 0);
  return [...nonZeros, ...zeros];
}

const arr1 = [1, 0, 2, 0, 3, 0, 4];
console.log(moveZerosToEnd([...arr1]));

const arr2 = [0, 0, 1, 2, 3];
console.log(moveZerosToEnd([...arr2]));

const arr3 = [1, 2, 3, 4];
console.log(moveZerosToEnd([...arr3]));

const arr4 = [0, 0, 0];
console.log(moveZerosToEnd([...arr4]));

console.log(moveZerosToEndNew([1, 0, 2, 0, 3, 0, 4]));

module.exports = { moveZerosToEnd, moveZerosToEndNew };
