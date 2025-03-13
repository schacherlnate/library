const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(library) {
    const display = document.querySelector(".display");
    library.forEach(book => {
        let bookDiv = document.createElement("div");
        let title = document.createElement("h3");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        bookDiv.className = "book";
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.style.backgroundColor=getRandomColor();
        display.appendChild(bookDiv);
    })
}

function getRandomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}

let book1 = new Book("LOTR", "JRRT", 1064);
let book2 = new Book("The Hobbit", "JRRT", 342);
let book3 = new Book("Alias Grace", "Atwood", 500);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
displayBooks(myLibrary);