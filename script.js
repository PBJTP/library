// generate a few placeholder books ONCE CODE BELOW IS DONE

// add listener "add book"

// show modal with book info form

// create book with form data and add to myLibrary array

// add book data to card, add style tags

// add style tags, and value to each book based on array

// append div

// add listener to remove book button

// remove book from array based on index/value

let myLibrary = [];
const addBtn = document.getElementById('bookForm');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

//add book listener and modal pop up
document.getElementById('addBook').addEventListener('click', () => {
    document.querySelector('.formWrapper').classList.add('active');
});


function addBookToLibrary(event) {
    //get form data and make object
    const formData = new FormData(addBtn);
    const data = Object.fromEntries(formData);

    //assign boolean to read status
    data.read = document.getElementById('read').checked ? true : false;
    //create book and push to myLibrary array
    myLibrary.push(new Book(
        data.title,
        data.author,
        data.pages,
        data.read,
        ));
    //form controls
    document.getElementById('bookForm').reset();
    event.preventDefault();
    document.querySelector('.formWrapper').classList.remove('active');
};


addBtn.addEventListener('submit', addBookToLibrary);


const cardUpdate = () => {
    //create elements and add classes
    const container = document.querySelector('.cardContainer');
    const card = document.createElement('div');
    const ul = document.createElement('ul');
    card.classList.add('card');
    container.appendChild(card);

};

cardUpdate();