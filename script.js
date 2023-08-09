const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const addButton = document.getElementById('addButton');
const bookList = document.getElementById('bookList');

const books = JSON.parse(localStorage.getItem('books')) || [];

function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}

function removeBook(index) {
  books.splice(index, 1);
  saveBooks();
  ßdisplayBooks();
}

function displayBooks() {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');

    const bookTitle = document.createElement('div');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = `${book.title} by ${book.author}`;
    bookItem.appendChild(bookTitle);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => removeBook(index));
    bookItem.appendChild(removeButton);
    bookList.appendChild(bookItem);
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
    displayBooks();
    titleInput.value = '';
    authorInput.value = '';
  }
});


displayBooks();