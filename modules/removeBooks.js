const updateLocalStorage = (books) => {
  localStorage.setItem('savedBooks', JSON.stringify(books));
};
const removeBook = (id, savedBooks) => {
  const books = savedBooks.filter((book) => book.id !== id);
  updateLocalStorage(books);
};

export default removeBook;