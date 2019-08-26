import React, { Component } from "react";
import API from "../utils/API";
import Icons from "../components/Icons";
import BooksContainer from "../components/Container";
import { TopBar, ResumeDL, Dots, GoogleBooks, Books } from '../components/ControlBar'

class Authors extends Component {
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
      .then(() => this.getBooks())
  };

  render() {
    return (
      <div>
        <BooksContainer>
          <TopBar
            title="Books"
          >
            <Dots />
            <GoogleBooks 
              link="bookStore"
              directory="Book Store"
            />
            <Books />
            <ResumeDL />
          </TopBar>
        </BooksContainer>
        <Icons />
      </div>
    );
  }
}

export default Authors;