// 6. Task: Array Reduction

// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const numbers = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      return acc + num;
    }
    return acc;
  }, 0);
  return sum;
};

console.log(numbers()); // Output: 30
