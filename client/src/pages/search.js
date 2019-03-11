import React, { Component } from "react";
import Card from "../components/Card";
import API from "../utils/API";
import Icons from "../components/Icons";
import  BooksContainer from "../components/Container";
import { TopBar, Input, ResumeDL, Dots, GoogleBooks, Books } from '../components/ControlBar'

class Search extends Component {

  state = {
    books: [],
    author: "",
    saved: []
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    if (event.key === 'Enter') {
      this.Googlebooks();
    } else {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  };

  Googlebooks = event => {
    event.preventDefault(); 

    API.googleBooks(this.state.author)
    .then(({ data: { items } }) => {
      console.log(items);
      const books = items.map(book => {
        const cheakEmpty = script => {
          if (script) {
            return `${script.substring(0, 200)}..`;
          } else {
            return ``;
          }
        };
        return {
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          synopsis: cheakEmpty(book.volumeInfo.description),
          id: book.id,
          image: book.volumeInfo.imageLinks.thumbnail,
          link: book.volumeInfo.infoLink
        };
      });
      this.setState({ 
        books: books,
        author: "" 
      });
    })
  }

  saveBook = bookId => {
    const savethis = this.state.books.find(({ id }) => id === bookId);
    this.setState({ saved: [...this.state.saved, bookId] })
    API.saveBook(savethis)
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
            <Input
              onSubmit={this.Googlebooks}
              value={this.state.author}
              onChange={this.handleInputChange}
              name="author"
              placeholder="Author"
            />
          </TopBar>
          {this.state.books.length ? (
            <div className="row">
              {this.state.books.map((book, index) => (
                <div key={index} className="col-sm-4">
                  <Card
                    image={book.image}
                    title={book.title}
                    synopsis={book.synopsis}
                    authors={book.authors}
                    link={book.link}
                    task={<i className={`${this.state.saved.includes(book.id) ? "fas" : "far"} fa-bookmark task`} onClick={() => this.saveBook(book.id)} />}
                  />
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

export default Search;