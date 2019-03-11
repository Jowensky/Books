import React from "react";
import './style.css';

const Card = props => {
  return (
    <div className="books">
      {props.task}
      <div className="contain">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img id="cover" href={props.link} src={props.image} alt={props.key}/>
        </a>
        <div className="overlay">
          <div className="text">{props.synopsis}</div> 
        </div>
      </div>
      <div>
        <h5 id="bookTitle">{props.title}</h5>
        <p id="author">{props.authors}</p>
      </div>
    </div>
  )
}

export default Card