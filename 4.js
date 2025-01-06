// 4. Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: 'Tesla', model: 'Model S', year: 2020 },
  { make: 'BMW', model: '3 Series', year: 2010 },
  { make: 'Mercedes', model: 'E-Class', year: 2021 },
  { make: 'Volkswagen', model: 'Golf', year: 2017 },
  { make: 'Nissan', model: 'Maxima', year: 2019 },
  { make: 'Toyota', model: 'Corolla', year: 2015 },
  { make: 'Audi', model: 'A4', year: 2016 },
  { make: 'Honda', model: 'Civic', year: 2014 },
];

const sortCars = (cars) => {
  const sortedCars = cars.sort((a, b) => a.year - b.year);

  return sortedCars;
};

console.log(sortCars(cars));
