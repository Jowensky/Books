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
      console.log(data)
      return data.authors.map((novel, index) => {
        return (
          <div className="col-md-4">
            <div className="contain" key={index}>
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
      <div className="row">
        {this.displayBooks()}
      </div>
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
