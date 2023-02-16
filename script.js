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
const container = document.querySelector('.cardContainer');



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

    //assign read status
    data.read = document.getElementById('read').checked ? 'Read' : 'Not Read Yet';
    //create book and push to myLibrary array
    myLibrary.push(new Book(
        data.title,
        data.author,
        data.pages,
        data.read,
        ));
    displayBooks();
    //form controls
    console.log(myLibrary);
    document.getElementById('bookForm').reset();
    //prevent refresh on submit
    event.preventDefault();
    document.querySelector('.formWrapper').classList.remove('active');
};

//event listener for form
addBtn.addEventListener('submit', addBookToLibrary);

//loop through myLibrary and render to DOM, add additional button functionality
const displayBooks = () => {
    container.innerHTML = "";
    for (i = 0; i < myLibrary.length; i++) {
        cardUpdate(i);
    };
    deleteBook();
    changeRead();
};


const cardUpdate = (id) => {

    if (myLibrary.length === 0) {
        return;
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
};

const deleteBook = () => {
    const remove = Array.from(document.querySelectorAll('.remove'));
    remove.forEach((button, index) => {
        button.addEventListener('click', () => {
            myLibrary.splice(index,1);
            displayBooks();
        })
    })
};

//change read status by clicking the word on the card
const changeRead = () => {
    const readStatus = Array.from(document.querySelectorAll('.readStatus'));
    readStatus.forEach((div, index) => {
        div.addEventListener('click', () => {
            if (myLibrary[index].read == 'Read') {
                myLibrary[index].read = 'Not Read Yet';
            } else {
                myLibrary[index].read = 'Read';
            }
            displayBooks();
        })
    })
}