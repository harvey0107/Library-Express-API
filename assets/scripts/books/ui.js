const onGetAllBooksSuccess = function (res) {
  // if success, fire this anonymous function
  console.log('response is', res)
  console.log('books are', res.books)
  let booksHTML = ''
  res.books.forEach(function (book) {
    const bookHTML = (`
      <div> 
  <h4>${book.title}</h4> 
  <p>Author: ${book.author}</p> 
  <p>ID: ${book._id}</p> 
    </div> 
  `)
booksHTML += bookHTML })
console.log('bookHTML is',booksHTML)
$('#content').html(booksHTML)
}

const onGetAllBooksError = function (err) {
  // if error, fire THIS anonymous function
  console.log('error is', err)
}

const onGetSingleBookSuccess = function(res) {
  console.log('res is', res)
  const book = res.book
  const bookHTML = (`
    <div>
      <h4>${book.title}</h4>
      <p>Author: ${book.author}</p>
      <p>ID: ${book._id}</p>
    </div>
  `)
  $('#content').html(bookHTML)
}
const onGetSingleBookError = function(err) {
  console.log('OH NO! error is', err)
}

const onDeleteBookSuccess = function () {
  $('#message').text('Book deleted successfully!')
}
const onDeleteBookFailure = function () {
  $('#message').text('Book was not deleted :(')
}

module.exports = {
  onGetAllBooksError:onGetAllBooksError,
  onGetAllBooksSuccess:onGetAllBooksSuccess
}
