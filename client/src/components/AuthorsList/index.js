import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../../queries";
import "./style.css";

class AuthorsList extends Component {

  displayAuthors = () => {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading Authors...</div>;
    } else {
      return data.novels.map((novel, index) => {
          return (
            <div key={index}>
              <p onClick={() => this.props.selectedAuthor(novel.authors)}>
                {novel.authors}
              </p>
            </div>
          );
        })
      } 
  };

  render() {
    return <div className="col-md-3">{this.displayAuthors()}</div>;
  }
}

export default graphql(getBooksQuery)(AuthorsList);
