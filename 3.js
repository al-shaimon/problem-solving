// 3. Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (n) => n * n;
const double = (n) => n * 2;
const addFive = (n) => n + 5;

const composedFunction = (n) => {
  const squared = square(n);
  const doubled = double(squared);
  const added = addFive(doubled);

  return added;
};

console.log(composedFunction(2));
