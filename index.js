import addBook from './modules/addBook.js';
import GetTime from './modules/getTime.js';
import navHandler from './modules/navHandler.js';
import renderBooks from './modules/renderBooks.js';

const initializeApp = () => {
  document.getElementById('form-section').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';
  addBook();
  renderBooks();
  navHandler();
  GetTime();
};

document.addEventListener('DOMContentLoaded', initializeApp);
