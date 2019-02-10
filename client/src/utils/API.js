import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get(`/api/book`);
  },
  // Gets the book with the given id
  getBookId: function(id) {
    return axios.get(`api/book/${id}`);
  },
  // Deletes the book with the given id
  deleteBook: function(bookId) {
    return axios.delete(`/api/book/${bookId}`);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post(`/api/book`, bookData);
  },
  googleBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  }
};