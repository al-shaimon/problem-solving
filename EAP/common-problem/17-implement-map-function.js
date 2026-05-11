/**
 * Implement your own map() function
 * Write a custom map() function that works like the built-in array map method.
 */

function customMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

function customMapWithContext(array, callback, thisArg) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback.call(thisArg, array[i], i, array));
  }
  return result;
}

function customMapReduce(array, callback) {
  return array.reduce((result, element, index, arr) => {
    result.push(callback(element, index, arr));
    return result;
  }, []);
}

const numbers = [1, 2, 3, 4, 5];
console.log(customMap(numbers, (x) => x * 2));
console.log(customMap(numbers, (x) => x ** 2));
console.log(customMap(['hello', 'world'], (s) => s.toUpperCase()));

console.log(customMap([1, 2, 3], (x, i) => x + i));

const multiplier = { factor: 10 };
console.log(
  customMapWithContext(
    [1, 2, 3],
    function (x) {
      return x * this.factor;
    },
    multiplier,
  ),
);

console.log(customMapReduce([1, 2, 3, 4], (x) => x * 3));

console.log(
  JSON.stringify(customMap([1, 2, 3], (x) => x * 2)) ===
    JSON.stringify([1, 2, 3].map((x) => x * 2)),
);

module.exports = { customMap, customMapWithContext, customMapReduce };
