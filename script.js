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
                console.log(allBooks)

        }
        console.log(bookInfo)
})

;//create an empty object

// var info = {};//create an empty object
// info.firstName = document.getElementById('firstName').value;
// info.lastName = document.getElementById('lastName').value;
// allInfo.push(info);//you had to initialize the array before


// let bookTitle = title.value
//     let bookAuthor = author.value
//     booksTitle.push(bookTitle)
//     booksAuthor.push(bookAuthor)
//     for (let i = 0; i < booksTitle.length; i++) {
//         displayInput.innerHTML += `<li> ${ booksTitle[i]} </li>`

//     }