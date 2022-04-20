/* eslint-disable consistent-return */

const bookStore = document.querySelector('.book-store');
const booksForm = document.getElementById('form');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');

let library = JSON.parse(localStorage.getItem('booksList')) || [];

const addBook = (title, author) => {
  library.push({ title, author });

  localStorage.setItem('booksList', JSON.stringify(library));
  return { title, author };
};

const createBook = ({ title, author }) => {
  const bookWrapper = document.createElement('div');
  const titleTag = document.createElement('p');
  const authorTag = document.createElement('p');
  const removeButton = document.createElement('button');
  const lineBreak = document.createElement('hr');

  titleTag.innerText = title;
  authorTag.innerText = author;
  removeButton.innerText = 'Remove';

  bookWrapper.append(titleTag, authorTag, removeButton, lineBreak);
  bookStore.appendChild(bookWrapper);

  removeButton.addEventListener('click', (e) => {
    const book = e.target.parentElement;
    bookStore.removeChild(book);

    const filteredTitle = e.target.previousElementSibling.previousElementSibling.textContent;

    library = library.filter((book) => {
      if (book.title === filteredTitle) {
        return false;
      }
      return true;
    });
    localStorage.setItem('booksList', JSON.stringify(library));
  });
};

library.forEach(createBook);

booksForm.onsubmit = (e) => {
  e.preventDefault();

  if (bookTitle.value === '' || bookAuthor.value === '') {
    return false;
  }
  const newBook = addBook(bookTitle.value, bookAuthor.value);

  createBook(newBook);

  bookTitle.value = '';
  bookAuthor.value = '';
};
