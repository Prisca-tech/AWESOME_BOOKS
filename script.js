let title = document.getElementById('title')
let author = document.getElementById('author')
let addBtn = document.getElementById('add-btn')
let displayInput = document.getElementById('display-input')
const bookInfo = {}
let allBooks = []

addBtn.addEventListener('click', function() {
        let bookTitle = title.value
        let bookAuthor = author.value
        bookInfo.title = bookTitle
        bookInfo.author = bookAuthor
        allBooks.push(bookInfo)
        for (let i = 0; i < allBooks.length; i++) {
        displayInput.innerHTML += `<li> ${ allBooks[i].title } by ${allBooks[i].author}</li>`
        displayInput.innerHTML += `</span><button>Remove</button><span>`     
                break
        }
})
