import React, { Component } from "react";
import CardQL from "../components/CardQL";
import Icons from "../components/Icons";
import BooksContainer from "../components/Container";
import { TopBar, ResumeDL, Dots, GoogleBooks, Books } from '../components/ControlBar'
import {graphql} from 'react-apollo'
import { deleteBookMutation, getBooksQuery } from '../queries';

class saved extends Component {
  state = {
    books: [],
    delete: -1
  };

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
          <CardQL 
            task={this.deleteBook}
          />
        </BooksContainer>
        <Icons />
      </div>
    );
  }
}

export default graphql(deleteBookMutation, {name: "deleteBookMutation"})(saved);