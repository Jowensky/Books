import React, { Component } from "react";
import {graphql} from 'react-apollo';
import { getAuthorsBooksQuery } from '../../queries';
import './style.css';

class AuthorNovels extends Component {

  displayBooks = () => {
    const data = this.props.data;
    if (data.loading) {
      return (
        <div>
          Loading Books...
        </div>
      )
    } else {
      return data.authors.map(novel => {
        return (
          <div className="books">
            <div className="contain">
              <a href={novel.link} target="_blank" rel="noopener noreferrer">
                <img id="cover" href={novel.link} src={novel.image} alt={novel.key} />
              </a>
              <div className="overlay">
                <div className="text">{novel.synopsis}</div> 
              </div>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
        <div className="col-md-9">
          {this.displayBooks()}
        </div>
    )
  }
}

export default graphql(getAuthorsBooksQuery, { 
    options: (props) => {
      return { 
        variables: {
        id: props.author
      }
    }
  }
})(AuthorNovels);
