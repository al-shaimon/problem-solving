/**
 * Find the longest increasing subsequence
 * Given an array of numbers, find the length of the longest strictly increasing subsequence.
 */

function longestIncreasingSubsequenceLength(arr) {
  if (arr.length === 0) return 0;

  const dp = new Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

function longestIncreasingSubsequence(arr) {
  if (arr.length === 0) return [];

  const dp = new Array(arr.length).fill(1);
  const parent = new Array(arr.length).fill(-1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        parent[i] = j;
      }
    }
  }

  const maxLength = Math.max(...dp);
  const maxIndex = dp.indexOf(maxLength);
  const result = [];
  let index = maxIndex;

  while (index !== -1) {
    result.unshift(arr[index]);
    index = parent[index];
  }

  return result;
}

console.log(longestIncreasingSubsequenceLength([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(longestIncreasingSubsequenceLength([0, 1, 0, 4, 4, 4, 3, 2, 1]));
console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(longestIncreasingSubsequenceLength([1, 2, 3, 4, 5]));
console.log(longestIncreasingSubsequenceLength([5, 4, 3, 2, 1]));

module.exports = { longestIncreasingSubsequenceLength, longestIncreasingSubsequence };
