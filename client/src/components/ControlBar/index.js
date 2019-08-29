import React from "react";
import "./style.css";
import Resume from './images/Developer.pdf'
import Search from './images/search.png'
import {Link} from 'react-router-dom';

export function TopBar(props) {
    return (
      <div className="grey">
       <p id="title">{props.title}</p>
          {props.children}
      </div>
    )
}
  
export function ResumeDL() {
    return (
        <div id="Resume">
            <a href={Resume} download="Jowensky Neard Resume"><i className="fas fa-arrow-alt-circle-down"></i></a>
        </div>
    )
}

export function Input(props) {

    return ( <form autoComplete="off" onSubmit={(event) => props.onSubmit(event)}>
              <img src={Search} alt="search icon"  id="searchIcon" />
              <input type="text" id="searchBar" {...props}/>
          </form>
    );
}

export function Dots() {
    return (
        <div className="screenDisplay">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    );
}

export function GoogleBooks(props) {
    return ( 
        <div>
          <Link to={`/${props.link}`}>
            <div id="store">{props.directory}</div>
          </Link>
        </div>
    );
}

export function Books() {
  return ( 
      <div className="groups">
        <Link to="/">
          <button id="allBooks" className={window.location.pathname === "/" || window.location.pathname === "/libary"  ? "darker" : ""}>
            All Books
          </button>
        </Link>
        {/* <Link to="/authors">
          <button id="authors" className={window.location.pathname === "/authors" ? "darker" : ""}>
            Authors
          </button>
        </Link> */}
      </div>
  );
}

export function Categories() {
    return (
      <div className="groups">
        <i class="fas fa-star"></i>
      </div>
    );
}
  