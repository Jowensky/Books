import React from "react";
import {Link, NavLink} from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link 
        className="navbar-brand" 
        to="/">
        Google Book Search
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-info ${window.location.pathname === "/" ? "text-danger" : ""}`} 
            to="/">
            Search For Books
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-info ${window.location.pathname === "/saved" ? "text-danger" : ""}`} 
            to="/saved">
            View Saved Books
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
