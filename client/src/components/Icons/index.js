import React from "react";
import Folder from "./images/folderIcon.png";
import './style.css'

const Icons = () => {
  return (
    <div id="icons">
      <img src={Folder} alt="folder" />
      <br />
      <img src={Folder} alt="folder" />
      <br />
      <img src={Folder} alt="folder" />
    </div>
  );
};

export default Icons;
