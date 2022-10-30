
const form = document.querySelector('#book-form');
const booksList = document.querySelector('#book-list');


// events
form.addEventListener('submit', addBook);
booksList.addEventListener('click', deleteBook);

//get form input data
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const isbnInput = document.querySelector('#isbn');


function addBook(e) {
    // input value
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;
    // create <tr> element
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><a href="#">X</a></td>
    `;

    booksList.appendChild(row);
    // clear input value
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';

    // form submit event control
    e.preventDefault();
    }


// delete book
function deleteBook(e) {
    if(e.target.textContent === 'X') {
        if(confirm('Are you sure to delete this task?')) {
            e.target.parentElement.remove()
            }
    }
}