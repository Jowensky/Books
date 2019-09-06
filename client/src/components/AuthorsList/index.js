import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../../queries";
import "./style.css";
import AuthorContainer from '../AuthorContainer';

class AuthorsList extends Component {

  
  displayAuthors = () => {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading Authors...</div>;
    } else {
      const authors = data.novels.map(item => item.authors)
      const uniqueAuthors = authors.filter((item, index) => {
        return authors.indexOf(item) >= index;
      })
      return uniqueAuthors.map((author, index) => {
          return (
            <div id="selectAuthor" className={this.props.selected === author ? "blue" : "none"} key={index}>
              <p onClick={() => this.props.selectedAuthor(author)}>
                {author}
              </p>
            </div>
          );
        })
      } 
  };

  render() {
    return <AuthorContainer>{this.displayAuthors()}</AuthorContainer>;
  }
}

export default graphql(getBooksQuery)(AuthorsList);