import React from "react";
import "./style.css";
import Resume from './images/Developer.pdf'
import Search from './images/search.png'
import {Link} from 'react-router-dom';

export function TopBar(props) {
    return (
      <div className="grey">
       <p id="title">Books</p>
          {props.children}
      </div>
    )
  }
  
  export function ResumeDL(props) {
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
  
  export function Dots(props) {
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
            <a href="https://play.google.com/store/books?hl=en" target="_blank" rel="noopener noreferrer">
             <div id="store">Book Store</div>
            </a>
         </div>
      );
  }

  export function Books(props) {
    return ( 
        <div className="groups">
        <Link to="/">
          <button id="allBooks" className={window.location.pathname === "/" ? "darker" : ""}>
            All Books
          </button>
        </Link>
        <Link to="/saved">
          <button id="savedBooks" className={window.location.pathname === "/saved" ? "darker" : ""}>
            Saved Books
          </button>
        </Link>
        </div>
    );
  }
  