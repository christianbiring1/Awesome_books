/* eslint-disable max-classes-per-file */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
const bookStore = document.querySelector('.book-store');
const form = document.getElementById('form');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let defaultBooks = JSON.parse(localStorage.getItem('books')) || [];

class UI {
  static displayBooks() {
    defaultBooks.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const bookStore = document.querySelector('.book-store');
    const div = document.createElement('div');
    div.classList.add('book-container');

    div.innerHTML = `
    <span class='book-title'>${book.title}</span> by <span class='book-author'>${book.author}</span>
    <button class="delete">Remove</button>`;

    bookStore.appendChild(div);
  }

  static clearFields() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');

    title.value = '';
    author.value = '';
  }

  static deleteBook(target) {
    if (target.classList.contains('delete')) {
      target.parentNode.remove();
    }
    const filteredTitle = target.previousElementSibling.previousElementSibling.textContent;

    defaultBooks = defaultBooks.filter((book) => {
      if (book.title !== filteredTitle) {
        return true;
      }
    });
  }
}

UI.displayBooks();

function addBook(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title === '' || author === '') {
    return;
  }

  const book = new Book(title, author);

  defaultBooks.push(book);
  localStorage.setItem('books', JSON.stringify(defaultBooks));

  UI.addBookToList(book);

  UI.clearFields();
}

form.addEventListener('submit', addBook, false);

function hanldRemove(e) {
  UI.deleteBook(e.target);
  localStorage.setItem('books', JSON.stringify(defaultBooks));
}

bookStore.addEventListener('click', hanldRemove);

const headerDate = document.querySelector('.header-date');
headerDate.innerHTML = Date();

const bookSection = document.querySelector('.book-section');
const addBookSection = document.querySelector('.add-section');
const contactSection = document.querySelector('.contact-section');

const linkList = document.querySelector('.list');
const AddNewLink = document.querySelector('.add');
const contactLink = document.querySelector('.contact');

linkList.addEventListener('click', () => {
  bookSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
  linkList.style.color = 'blue';
  AddNewLink.style.color = 'black';
  contactLink.style.color = 'black';
});

AddNewLink.addEventListener('click', () => {
  bookSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
  AddNewLink.style.color = 'blue';
  linkList.style.color = 'black';
  contactLink.style.color = 'black';
});

contactLink.addEventListener('click', () => {
  bookSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
  contactLink.style.color = 'blue';
  AddNewLink.style.color = 'black';
  linkList.style.color = 'black';
});
