// Your code here
/** A book object representation
 * @typedef {Object} Book
 * @property {string} title - The title of the book
 * @property {string} author - The author of the book
 * @property {string} genre - The genre of the book
 */

/** returns a list of objects with the given genre
 * @param {string} genre - The genre of books required
 * @param {Book[]} books - An array of books required
 * @returns {Book[]} An array of Book objects matching the specified genre.
 */

function filterByGenre(books, genre) {
  // Check if books is an array
  if (!Array.isArray(books)) {
    throw new TypeError('The "books" parameter must be an array.');
  }

  // Filter books by the specified genre
  return books.filter((book) => book.genre === genre);
}

module.exports = filterByGenre;