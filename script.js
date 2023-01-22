console.log('hello world');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function isChecked() {
    if (document.getElementById('read').checked) {
        return true;
    } else {
        return false;
    }
}

function addBookToLibrary(event) {
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    read = isChecked();
    myLibrary.push(new Book(title, author, pages, read));
    document.getElementById('bookForm').reset();
    event.preventDefault();
}

let addBtn = document.getElementById('bookForm');

addBtn.addEventListener('submit', addBookToLibrary);