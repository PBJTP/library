let myLibrary = [];

// Factory Function way

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// Class way

// class Book {
//     constructor(title, author, pages, read) {
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//         this.read = read;
//     }
// }

// Moved to Ternary within addBookToLibrary function

// function isChecked() {
//     if (document.getElementById('read').checked) {
//         return true;
//     } else {
//         return false;
//     }
// }



function addBookToLibrary(event) {
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    read = document.getElementById('read').checked ? true : false;
    myLibrary.push(new Book(title, author, pages, read));
    document.getElementById('bookForm').reset();
    event.preventDefault();
}

let addBtn = document.getElementById('bookForm');

addBtn.addEventListener('submit', addBookToLibrary);