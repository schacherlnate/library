const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook(book) {

}

function displayBook(book) {
    const display = document.querySelector(".display");

    let bookDiv = document.createElement("div");
    bookDiv.id = book.id;
    let title = document.createElement("h3");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    let isReadContainer = document.createElement("div");
    isReadContainer.textContent = "Read? ";
    let isReadButton = document.createElement("button");
    isReadButton.classList.add("isReadButton");
    let removeBook = document.createElement("button");
    removeBook.textContent = "Remove";
    removeBook.addEventListener("click", ()=>{
        let parentBook = removeBook.closest(".book");
        let idx = 0;
        for (let i = 0; i < myLibrary.length; i++) {
            if (myLibrary[i].id===parentBook.id) {
                idx = i;
            }
        }
        myLibrary.splice(idx, 1);
        parentBook.remove();
    });

    bookDiv.className = "book";
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    isReadContainer.appendChild(isReadButton);
    buttonContainer.appendChild(isReadContainer);
    buttonContainer.appendChild(removeBook);
    bookDiv.appendChild(buttonContainer);
    bookDiv.style.backgroundColor=getRandomColor();
    display.appendChild(bookDiv);
}

function getRandomColor() {
    const r = Math.floor(Math.random()*200);
    const g = Math.floor(Math.random()*200);
    const b = Math.floor(Math.random()*200);
    return `rgb(${r},${g},${b})`
}

const addBookButton = document.querySelector("#addBook");
addBookButton.addEventListener("click", ()=>{
    let form = document.querySelector("form");
    form.style.visibility = form.style.visibility==="hidden" ? "visible" : "hidden";
});

const form = document.querySelector("form");
form.addEventListener("submit", e=>{
    e.preventDefault();
    const formData = new FormData(form);
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = formData.get("numPages");
    let book = new Book(title, author, pages);
    addBookToLibrary(book);
    displayBook(book);
    form.reset();
});

let book1 = new Book("LOTR", "JRRT", 1064);
let book2 = new Book("The Hobbit", "JRRT", 342);
let book3 = new Book("Alias Grace", "Atwood", 500);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
myLibrary.forEach(book=>displayBook(book));