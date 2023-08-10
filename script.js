function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}

function createBookItem(book, index) {
  const bookItem = `
    <div class="book-item">
      <div class="book-title">${book.title} by ${book.author}</div>
      <button class="remove-button" data-index="${index}">Remove</button>
    </div>
  `;

  return bookItem;
}

function updateBookListDisplay() {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const bookItem = createBookItem(book, index);
    bookList.insertAdjacentHTML('beforeend', bookItem);
  });
}

function removeBook(index) {
  books.splice(index, 1);
  saveBooks();
  updateBookListDisplay();
}

if (typeof document !== 'undefined') {
  const titleInput = document.getElementById('titleInput');
  const authorInput = document.getElementById('authorInput');
  const addButton = document.getElementById('addButton');
  const bookList = document.getElementById('bookList');

  const books = JSON.parse(localStorage.getItem('books')) || [];

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
    const index = event.target.getAttribute('data-index');
    removeBook(index);
  }
});
}




