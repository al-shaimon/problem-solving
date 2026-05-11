/**
 * Find the intersection of two arrays
 * Write a function that returns the common elements between two arrays.
 */

function findIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  const result = [];
  const seen = new Set();

  for (let num of arr1) {
    if (set2.has(num) && !seen.has(num)) {
      result.push(num);
      seen.add(num);
    }
  }

  return result;
}

function findIntersectionFilter(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter((num) => set2.has(num)))];
}

function findIntersectionIndexOf(arr1, arr2) {
  return arr1.filter((num, index) => arr1.indexOf(num) === index && arr2.includes(num));
}

console.log(findIntersection([1, 2, 2, 1], [2, 2]));
console.log(findIntersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(findIntersection([1, 2, 3], [4, 5, 6]));
console.log(findIntersection([], [1, 2, 3]));
console.log(findIntersection([1, 2, 3], [1, 2, 3]));
console.log(findIntersection([1, 2, 2, 3], [2, 3, 3, 4]));

console.log(findIntersectionFilter([1, 2, 2, 1], [2, 2]));
console.log(findIntersectionIndexOf([4, 9, 5], [9, 4, 9, 8, 4]));

module.exports = {
  findIntersection,
  findIntersectionFilter,
  findIntersectionIndexOf,
};
