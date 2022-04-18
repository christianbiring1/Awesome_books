//Create a collection that keeps a list of books
const library = [
  // {
  //   title: 'example 1',
  //   author: 'example 1',
  // },
  // {
  //   title: 'example 2',
  //   author: 'example 2',
  // },
];

//Create a function to add a new book to the collection
const bookStore = document.querySelector('.book-store');
const booksForm = document.forms[0];
const bookTitle = booksForm['title'];
const bookAuthor = booksForm['author'];
const addButton = document.querySelector('button');

function addBook() {
  booksForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  addButton.addEventListener('click', () => {
    const bookWrapper = document.createElement('div');
    const titleTag = document.createElement('p');
    const authorTag = document.createElement('p');
    const removeButton = document.createElement('button');
    const lineBreak = document.createElement('hr');

    removeButton.classList.add('delete');

    // Display on the page the typed title and author

    titleTag.textContent = `${bookTitle.value}`;
    authorTag.textContent = `${bookAuthor.value}`;
    removeButton.textContent = 'Remove';

    // Append the created element in the document

    bookWrapper.append(titleTag, authorTag, removeButton, lineBreak);
    bookStore.appendChild(bookWrapper);
    console.log(bookTitle);

    // Add new book to the collection, with title and author

    let id = 0;
    function bookAdded(title, Author, id) {
      (this.title = title), (this.Author = Author), (this.id = id);
    }

    const newBook = new bookAdded(
      `${bookTitle.value}`,
      `${bookAuthor.value}`,
      library.length
    );
    library.push(newBook);
    console.log(library);
    removeButton.addEventListener('click', (e) => {
      const book = e.target.parentElement;
      bookStore.removeChild(book);

      library.filter((item) => {
        library.length - 1 !== id;
      });
      console.log(library);
    });

    // Remove the book inside the collection.
  });
}

addBook();
