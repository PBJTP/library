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
const remove = document.querySelectorAll('.remove');
const container = document.querySelector('.cardContainer');

console.log(remove);

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
    let id = myLibrary.length;

    //assign boolean to read status
    data.read = document.getElementById('read').checked ? true : false;
    //create book and push to myLibrary array
    myLibrary.push(new Book(
        data.title,
        data.author,
        data.pages,
        data.read,
        ));
    displayBooks();
    //form controls
    document.getElementById('bookForm').reset();
    event.preventDefault();
    document.querySelector('.formWrapper').classList.remove('active');

};


addBtn.addEventListener('submit', addBookToLibrary);

const displayBooks = () => {
    container.innerHTML = "";
    for (i = 0; i < myLibrary.length; i++) {
        cardUpdate(i);
    };

};

const cardUpdate = (id) => {
    //create variables and new elements

    if (myLibrary.length === 0) {
        return;
    } else if (myLibrary.indexOf(id) === true) {
        myLibrary[id].read = 'Read';
    } else {
        myLibrary[id].read = 'Not Read';
    }

    // Add html to cardContainer
    container.innerHTML += 
    `<div class="card" id="${id}>
        <div class="cardInfo">
            <ul class="cardInfo">
                <li class="title">${myLibrary[id].title}</li>
                <div class="line"></div>
                <li class="author">${myLibrary[id].author}</li>
                <div class="line"></div>
                <li class="pages">${myLibrary[id].pages}</li>
                <div class="line"></div>
                <div class="readStatus">${myLibrary[id].read}</div>
                <button class="remove">Remove from list</button>
            </ul>
        </div>
    </div>`;
    const removeBtn = document.querySelectorAll('.remove');
    console.log(removeBtn);
    removeBtn.forEach((item) => {
        item.addEventListener('click', () => {
            myLibrary.splice(item);
            displayBooks();
        });
    });
    

};