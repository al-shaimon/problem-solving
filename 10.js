// 10. Task: Functional Programming - Reduce

// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.

const items = [
  { quantity: 1, price: 10 },
  { quantity: 2, price: 20 },
  { quantity: 3, price: 30 },
];

const calculateTotalValue = (arr) => {
  const total = arr.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  return total;
};

console.log(calculateTotalValue(items)); // Output: 140
