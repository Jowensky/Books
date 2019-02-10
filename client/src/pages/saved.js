import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";

class saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    API.getBooks()
      .then(({ data }) => this.setState({ books: data }))
      .catch(err => console.log(err));
  };

  deleteBook = bookId => {
    API.deleteBook(bookId)
      .then(console.log(`deleted`))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container-fluid">
      {this.state.books.length ? (
       <div className="row">
          {this.state.books.map((book, index) => (
            <div className="col-sm-4">
              <form>
                <Card 
                image={book.image}
                title={book.title}
                key={index}
                id={book._id}
                synopsis={book.synopsis}
                authors={book.authors}
                delORsav={this.deleteBook}
                link={book.link}
                task={'Delete'}
                />
              </form>
            </div>
          ))}
            </div>
      ) : (
        <h3>No Results to Display</h3>
      )}
      </div>
    );
  }
}

export default saved;