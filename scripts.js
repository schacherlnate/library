const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let book1 = new Book("LOTR", "JRRT");
console.log(book1);