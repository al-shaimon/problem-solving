// 2. Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  { title: 'Animal Farm', author: 'Harper Lee', year: 1945 },
  { title: 'The Sun Also Rises', author: 'Charles Dickens', year: 1843 },
  { title: 'To Kill a Mockingbird', author: 'George Orwell', year: 1945 },
  { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
];

const booksTitle = (books) => {
  const titles = books.map((book) => book.title);

  return titles;
};

console.log(booksTitle(books));
