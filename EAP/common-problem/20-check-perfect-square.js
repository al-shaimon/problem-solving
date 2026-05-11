/**
 * Check if a number is a perfect square without using Math.sqrt()
 * Write a function to determine if a number is a perfect square using loops or binary search.
 */

function isPerfectSquareBinarySearch(num) {
  if (num < 0) return false;
  if (num === 0) return true;

  let left = 1;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === num) {
      return true;
    } else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

function isPerfectSquareLinear(num) {
  if (num < 0) return false;

  let i = 0;
  while (i * i <= num) {
    if (i * i === num) {
      return true;
    }
    i++;
  }

  return false;
}

function isPerfectSquareNewton(num) {
  if (num < 0) return false;
  if (num === 0) return true;

  let x = num;
  let root = x;

  while (root * root > num) {
    root = Math.floor((root + Math.floor(num / root)) / 2);
  }

  return root * root === num;
}

console.log(isPerfectSquareBinarySearch(16));
console.log(isPerfectSquareBinarySearch(14));
console.log(isPerfectSquareBinarySearch(1));
console.log(isPerfectSquareBinarySearch(0));
console.log(isPerfectSquareBinarySearch(4));
console.log(isPerfectSquareBinarySearch(5));
console.log(isPerfectSquareBinarySearch(100));
console.log(isPerfectSquareBinarySearch(-1));

console.log(isPerfectSquareLinear(9));
console.log(isPerfectSquareLinear(10));

console.log(isPerfectSquareNewton(25));
console.log(isPerfectSquareNewton(26));

module.exports = {
  isPerfectSquareBinarySearch,
  isPerfectSquareLinear,
  isPerfectSquareNewton,
};
