// 8. Task: Unique Values

// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers = [1, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6];

const uniqueValues = (arr) => {
  const uniqueArr = [...new Set(arr)];
  return uniqueArr;
};

console.log(uniqueValues(numbers)); // Output: [1, 2, 3, 4, 5, 6]
