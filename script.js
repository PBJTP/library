let myLibrary = [];
document.getElementById('addBook').addEventListener('click', () => {
    console.log('something')
    document.getElementById('bookForm').classList.add('active');
});

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
}

// let addBtn = document.getElementById('bookForm');

// addBtn.addEventListener('submit', addBookToLibrary);