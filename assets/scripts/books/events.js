const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const handleGetAllBooks = function (event) {
  event.preventDefault()

  // if we had a form, we'd need to get data from that form here
  //   use getFormFields() function
  console.log(event)
  api.getAllBooks()
    .then(ui.onGetAllBooksSuccess)
    .catch(ui.onGetAllBooksError)
}

const handleGetSingleBook = function (event) {
  event.preventDefault()
  console.log('event.target is', event.target)
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData is', formData)
  api.getSingleBook(formData.book.id)
    .then(ui.onGetSingleBookSuccess)
    .catch(ui.onGetSingleBookError)
}

const handleDeleteBook = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const bookId = formData.book.id
  api.deleteBook(bookId)
    .then(ui.onDeleteBookSuccess)
    .catch(ui.onDeleteBookError)
}

module.exports = {
handleGetAllBooks: handleGetAllBooks,
handleGetSingleBook: handleGetSingleBook
}
