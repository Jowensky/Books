import React, { Component } from "react";
import Icons from "../components/Icons";
import BooksContainer from "../components/Container";
import { TopBar, ResumeDL, Dots, GoogleBooks, Books } from '../components/ControlBar'
import AuthorsList from '../components/AuthorsList';
import AuthorsNovel from '../components/AuthorsNovel';

class Authors extends Component {

  state = {
    selected: ""
  } 

  chosenAuthor = prop => {
    const author = prop

    this.setState({selected: author});
  }

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
                selected={this.state.selected}
              />
              <AuthorsNovel 
                author={this.state.selected} 
              /> 
            </div>
          </div>
        </BooksContainer>
        <Icons />
      </div>
    );
  }
}

export default Authors;