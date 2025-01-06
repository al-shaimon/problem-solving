// 1. Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const person = [
  { name: 'Charlie', age: 28, gender: 'male' },
  { name: 'David', age: 27, gender: 'male' },
  { name: 'Eve', age: 32, gender: 'female' },
  { name: 'Frank', age: 35, gender: 'male' },
  { name: 'Grace', age: 29, gender: 'female' },
  { name: 'Henry', age: 23, gender: 'male' },
  { name: 'Diana', age: 22, gender: 'female' },
];

const filterPerson = (arr) => {
  const filteredData = arr
    .filter((person) => person.gender === 'male')
    .map((person) => person.name);

  return filteredData;
};

console.log(filterPerson(person));
