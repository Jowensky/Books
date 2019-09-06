import React from "react";
import './style.css';

const AuthorContainer = (props) => {
    return (
        <div className="col-md-3" id="authorContainer">
            {props.children}
        </div>
    )
}

export default AuthorContainer;