const config = require('./../config')

const getAllBooks = function () {
  // calling the API!
  return $.ajax(`${config.apiUrl}/books`)
}

const getSingleBook = function(bookId) {
  console.log('argument bookId =', bookId)
  return $.ajax(`${config.apiUrl}/books/${bookId}`)
}
const deleteBook = function(bookId) {
  return $.ajax(`${config.apiUrl}/books/${bookId}`, {
    method: 'DELETE'
  })
}

module.exports = {
  getAllBooks: getAllBooks
}
