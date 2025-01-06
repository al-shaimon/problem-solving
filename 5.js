// 5. Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const persons = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 28 },
];

const modifyAgeByName = (arr, name, newAge) => {
  const person = arr.find((p) => p.name === name);

  if (person) {
    person.age = newAge;
  }
  return arr;
};

console.log(modifyAgeByName(persons, 'Charlie', 35));
