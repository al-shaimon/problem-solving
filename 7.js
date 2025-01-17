// 7.  Task: Leap Year Checker

// Write a function that determines whether a given year is a leap year.

// Example: Happy New Year
const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
};

console.log(isLeapYear(2024));
