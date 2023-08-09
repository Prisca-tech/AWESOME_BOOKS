const books = JSON.parse(localStorage.getItem('books')) || [];

function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}

function createBookItem(book) {
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

function removeBook(index) {
  books.splice(index, 1);
  saveBooks();
  updateBookListDisplay();
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

bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    const bookItem = event.target.closest('.book-item');
    const index = Array.from(bookList.children).indexOf(bookItem);
    removeBook(index);
  }
});