import React, { Component } from "react";
import Card from "../components/Card";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: [],
    author: ""
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();

    if (!this.state.author) {
      return false;
    }

    API
      .googleBooks(this.state.author)
      .then(({data: {
          items
        }}) => {
        const books = items.map(book => {
          const cheakEmpty = (script) => {
            if (script) {
              return `${script.substring(0, 200)}..`
            } else {
              return ``
            }
          }
          return {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            synopsis: cheakEmpty(book.volumeInfo.description),
            id: book.id,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
          }
        });
        console.log(items)
        this.setState({books});
      })
      .catch(err => console.log(err));
  } 
  
  saveBook = bookId => {
    const savethis = this
      .state
      .books
      .find(({id}) => id === bookId);

    API
      .saveBook(savethis)
      .then(function({data}) {})
      .catch(function(err) {
        console.log(err)
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <form>
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <FormBtn
                disabled={!(this.state.author)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </div>
        </div>
        {this.state.books.length ? (
          <div className="row">
            {this.state.books.map((book, index) => (
              <div className="col-sm-4">
                <Card 
                image={book.image}
                title={book.title}
                id={book.id}
                synopsis={book.synopsis}
                authors={book.authors}
                key={index}
                delORsav={this.saveBook}
                link={book.link}
                task={'Save'}
                />
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

export default Search;