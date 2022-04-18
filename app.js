//Create a collection that keeps a list of books
const library = [
  {
    title: 'For one more day',
    author: 'Mitch Albom',
  },
  {
    title: 'What the wiseman fear',
    author: 'Christian',
  },
];

//Create a function to add a new book to the collection
const bookStore = document.querySelector('.book-store');
const booksForm = document.forms[0];
const bookTitle = booksForm['title'].value;
const bookAuthor = booksForm['author'].value;
const addButton = document.querySelector('button');

function addBook() {
  booksForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  addButton.addEventListener('click', () => {
    const bookWrapper = document.createElement('div');
    const titleTag = document.createElement('p');
    const authorTag = document.createElement('p');
    const button = document.createElement('button');
    const lineBreak = document.createElement('hr');
  });
}

addBook();
