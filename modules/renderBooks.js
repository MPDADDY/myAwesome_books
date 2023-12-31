import removeBook from './removeBooks.js';

const renderBooks = () => {
  const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
  const article = document.getElementById('bookList');
  article.innerHTML = '';
  savedBooks.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.innerHTML = `"${book.title}" by ${book.author}`;
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.addEventListener('click', () => {
      removeBook(book.id, savedBooks);
      renderBooks();
    });
    bookDiv.appendChild(removeBtn);
    article.appendChild(bookDiv);

    const booksdiv = document.querySelectorAll('.book');
    for (let i = 0; i < booksdiv.length; i += 1) {
      if (i % 2 !== 0) {
        booksdiv[i].classList.add('grey');
      }
    }
  });
};

export default renderBooks;