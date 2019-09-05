import React, { Component } from "react";
import {graphql} from 'react-apollo'
import Icons from "../components/Icons";
import BooksContainer from "../components/Container";
import { TopBar, ResumeDL, Dots, GoogleBooks, Books } from '../components/ControlBar'
import AuthorsList from '../components/AuthorsList';
import AuthorsNovel from '../components/AuthorsNovel';
import { deleteBookMutation, getBooksQuery } from '../queries';

class Authors extends Component {

  state = {
    selected: ""
  } 

  chosenAuthor = prop => {
    console.log(prop)
    const author = prop

    this.setState({selected: author});
  }


  deleteBook = book => {
    console.log(book)
    this.props.deleteBookMutation({
      variables: {
        link: book
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
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
          <div className="container-fluid">
            <div className="row">
              <AuthorsList 
                selectedAuthor={this.chosenAuthor}
              />
              <AuthorsNovel 
                author={this.state.selected} 
                // task={this.deleteBook}
              /> 
            </div>
          </div>
        </BooksContainer>
        <Icons />
      </div>
    );
  }
}

export default graphql(deleteBookMutation, {name: "deleteBookMutation"})(Authors);