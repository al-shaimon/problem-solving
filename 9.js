// 09. Task: Advanced Sorting

// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

const students = [
  { name: 'Alice', grades: [80, 90, 100] },
  { name: 'Bob', grades: [75, 80, 85] },
  { name: 'Charlie', grades: [95, 90, 100] },
  { name: 'David', grades: [60, 70, 80] },
  { name: 'Eve', grades: [90, 95, 100] },
];

const sortStudents = (students) => {
  students.forEach((student) => {
    student.average = student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length;
    return student;
  });

  students.sort((a, b) => b.average - a.average);
  return students;
};

console.log(sortStudents(students));
