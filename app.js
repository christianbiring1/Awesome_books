const bookStore = document.querySelector('.book-store');
const form = document.getElementById('form');
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const addBookBtn = document.querySelector('.add-btn');

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

    div.innerHTML = `
    <p>${book.title}</P>
    <p>${book.author}</P>
    <button class="delete">Remove</button>
    <hr>`;

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
    const filteredTitle =
      target.previousElementSibling.previousElementSibling.textContent;

    defaultBooks = defaultBooks.filter((book) => {
      if (book.title !== filteredTitle) {
        return true;
      }
    });
  }
}

UI.displayBooks();

form.addEventListener('submit', addBook, false);

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

bookStore.addEventListener('click', hanldRemove);

function hanldRemove(e) {
  UI.deleteBook(e.target);
  localStorage.setItem('books', JSON.stringify(defaultBooks));
}
