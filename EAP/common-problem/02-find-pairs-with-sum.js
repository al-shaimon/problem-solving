/**
 * Find all pairs with a given sum in an array
 * Given an array and a target sum, return all pairs of numbers whose sum equals the target.
 */

function findPairsWithSum(arr, targetSum) {
  const pairs = [];
  const seen = new Set();

  for (let num of arr) {
    const complement = targetSum - num;
    if (seen.has(complement)) {
      pairs.push([Math.min(num, complement), Math.max(num, complement)]);
    }
    seen.add(num);
  }

  return Array.from(new Set(pairs.map((p) => JSON.stringify(p)))).map((p) => JSON.parse(p));
}

function findPairsWithSumNested(arr, targetSum) {
  const pairs = [];
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        const pair = [Math.min(arr[i], arr[j]), Math.max(arr[i], arr[j])];
        const pairStr = JSON.stringify(pair);
        if (!seen.has(pairStr)) {
          pairs.push(pair);
          seen.add(pairStr);
        }
      }
    }
  }
  return pairs;
}

console.log(findPairsWithSum([1, 5, 7, -1, 5], 6));
console.log(findPairsWithSum([2, 4, 3, 5, 7], 9));
console.log(findPairsWithSum([1, 2, 3], 10));
console.log(findPairsWithSum([5, 5, 5], 10));

module.exports = { findPairsWithSum, findPairsWithSumNested };
