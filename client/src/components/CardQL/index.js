import React, { Component } from "react";
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../../queries';
import './style.css';

class Card extends Component {

  displayBooks = () => {
    const data = this.props.data;
    if (data.loading) {
      return (
        <div>
          Loading Books...
        </div>
      )
    } else {
      return data.novels.map((novel, index) => {
        return (
          <div className="col-4" key={index}>
            <div className="books">
            <i className={`fas fa-bookmark task`} onClick={() => this.props.task(novel.link)} />
              <div className="contain">
                <a href={novel.link} target="_blank" rel="noopener noreferrer">
                  <img id="cover" href={novel.link} src={novel.image} alt={novel.key} />
                </a>
                <div className="overlay">
                  <div className="text">{novel.synopsis}</div> 
                </div>
              </div>
              <div>
                <h5 id="bookTitle">{novel.title}</h5>
                <p id="author">{novel.authors}</p>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.displayBooks()}
        </div>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(Card);