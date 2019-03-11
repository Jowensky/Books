import React from "react";
import "./style.css";

const BooksContainer = props => {
  return <div id="container">{props.children}</div>;
}

export default BooksContainer;