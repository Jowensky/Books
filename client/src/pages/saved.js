import React, { Component } from "react";
import Card from "../components/Card";
import API from "../utils/API";
import Icons from "../components/Icons";
import  BooksContainer from "../components/Container";
import { TopBar, ResumeDL, Dots, GoogleBooks, Books } from '../components/ControlBar'

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
  };

  deleteBook = bookId => {
    API.deleteBook(bookId)
      .then(() => window.location.reload())
  };

  render() {
    return (
      <div>
        <BooksContainer>
          <TopBar>
            <Dots />
            <GoogleBooks />
            <Books />
            <ResumeDL />
          </TopBar>
          {this.state.books.length ? (
            <div className="row">
              {this.state.books.map((book, index) => (
                <div className="col-sm-4">
                  <form>
                    <Card 
                      image={book.image}
                      title={book.title}
                      key={index}
                      synopsis={book.synopsis}
                      authors={book.authors}
                      link={book.link}
                      task={<i className="fas fa-bookmark task" onClick={() => this.deleteBook(book._id)} />}
                    />
                  </form>
                </div>
              ))}
            </div>
          ) : (
            <div />
          )}
        </BooksContainer>
        <Icons />
      </div>
    );
  }
}

export default saved;