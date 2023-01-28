let myLibrary = [];
let addBtn = document.getElementById('bookForm');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(event) {
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    read = document.getElementById('read').checked ? true : false;
    myLibrary.push(new Book(title, author, pages, read));
    document.getElementById('bookForm').reset();
    event.preventDefault();
    document.querySelector('.formWrapper').classList.remove('active');
};

addBtn.addEventListener('submit', addBookToLibrary);

document.getElementById('addBook').addEventListener('click', () => {
    document.querySelector('.formWrapper').classList.add('active');
});