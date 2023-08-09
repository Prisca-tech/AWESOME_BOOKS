const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const addButton = document.getElementById('addButton');
const bookList = document.getElementById('bookList');

const books = JSON.parse(localStorage.getItem('books')) || [];

function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}

function createBookItem(book, index) {
  const bookItem = document.createElement('div');
  bookItem.classList.add('book-item');

  const bookTitle = document.createElement('div');
  bookTitle.classList.add('book-title');
  bookTitle.textContent = `${book.title} by ${book.author}`;
  bookItem.appendChild(bookTitle);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');
  bookItem.appendChild(removeButton);

  return bookItem;
}

function updateBookListDisplay() {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const bookItem = createBookItem(book, index);
    bookList.appendChild(bookItem);
  });
}

function displayBooks() {
  updateBookListDisplay();
}

function removeBook(index) {
  books.splice(index, 1);
  saveBooks();
  updateBookListDisplay();
}

function setupRemoveButtonListeners() {
  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach((button, index) => {
    button.addEventListener('click', () => removeBook(index));
  });
}

addButton.addEventListener('click', () => {
  const title = titleInput.value;
  const author = authorInput.value;
  if (title && author) {
    books.push({
      title,
      author,
    });
    saveBooks();
    updateBookListDisplay();
    titleInput.value = '';
    authorInput.value = '';
  }
});

updateBookListDisplay();
setupRemoveButtonListeners();