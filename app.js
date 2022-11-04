const form = document.querySelector('#book-form');
const booksList = document.querySelector('#book-list');
const deleteBooks = document.querySelector('#delete-books')

// events
form.addEventListener('submit', addBook);
booksList.addEventListener('click', deleteBook);
deleteBooks.addEventListener('click', deleteAllBooks);


function addBook(e) {
    //get form input data
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');
    // input value
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;
    // create <tr> element
    const row = document.createElement('tr');
    // create book
    const book = [title, author, isbn];

    book.forEach((dataItem) => {
        const td = document.createElement('td');
        td.appendChild(document.createTextNode(dataItem));
        row.appendChild(td);
    })

    const td = document.createElement('td');
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.appendChild(document.createTextNode('X'));
    td.appendChild(link);
    row.appendChild(td);

    booksList.appendChild(row);
    // clear input value
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';

    // add book to local storage
    addBookToLS(book);
    // form submit event control
    e.preventDefault();
    }


// delete book
function deleteBook(e) {
    if(e.target.textContent === 'X') {
        if(confirm('Are you sure to delete this book?')) {
            e.target.parentElement.parentElement.remove()
            let isbn = event.target.parentElement.previousElementSibling
            let author = isbn.previousElementSibling
            let title = author.previousElementSibling
            let book = [title.textContent, author.textContent, isbn.textContent]
            deleteBookFromLS(book);
        }
    }
}

// delete all books
function deleteAllBooks(e) {
    if(confirm('Are you sure to delete all books?')) {
    while (booksList.firstChild){
        booksList.removeChild(booksList.firstChild)
    }
    }
}

// add book to local storage
function addBookToLS(book) {
    let books
    if(localStorage.getItem('books') === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}

// delete book from local storage
function deleteBookFromLS(book1) {
    let books
    if(localStorage.getItem(`books`) === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem(`books`))
        console.log(typeof books)

    }
    console.log(books)
    books.forEach((bookFromLS, index) => {
        console.log(JSON.stringify(bookFromLS) === JSON.stringify(book1))
        if(JSON.stringify(bookFromLS) === JSON.stringify(book1)) {
            books.splice(index, 1)
        }
    })
    localStorage.setItem('books', JSON.stringify(books))
}
