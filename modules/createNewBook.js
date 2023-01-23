const booksDiv = document.querySelector('.books');
// const viewList = document.querySelector('.my-grid');

export class CreateNewBook {
  static addNewBook(book) {
    const bookUnit = document.createElement('li');
    bookUnit.className = 'books-li';
    bookUnit.id = book.id;
    bookUnit.innerHTML = `
          <p class="book-name">${book.title}</p> 
          <p>By</p>
          <p class="the-auhtor">${book.author}</p>
          <button class='removeBook'>Remove</button>
          `;
    booksDiv.appendChild(bookUnit);
    booksDiv.style.border = '3px solid black';
  }

  // static removeBookFromPage(target) {
  //   if (target.classList.contains('removeBook')) {
  //     target.parentElement.remove();
  //   }

  //   if (!booksDiv.firstElementChild) {
  //     booksDiv.style.border = '3px solid white';
  //   }
  // }

  static loadFromStorage() {
    let books;

    if (localStorage.getItem('bookInfo')) {
      books = JSON.parse(localStorage.getItem('bookInfo'));
    } else {
      books = [];
    }

    return books;
  }

  static displayBooksFromStorage() {
    const books = CreateNewBook.loadFromStorage();

    books.forEach((book) => {
      CreateNewBook.addNewBook(book);
    });
  }

  // static removeBookFromStorage(element) {
  //   const books = CreateNewBook.loadFromStorage();
  //   const { id } = element.parentElement;
  //   const index = books.findIndex((book) => book.id === id);
  //   books.splice(index, 1);
  //   localStorage.setItem('bookInfo', JSON.stringify(books));
  // }

  // static displayOnLoad() {
  //   // if ()
  //   viewList.style.display = 'flex';
  // }
}
