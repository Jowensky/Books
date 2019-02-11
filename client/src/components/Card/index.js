import React from "react";

const style = {
    size: {
        width: "18rem",
        height: "50rem"
    }
}

const Card = props => {
  return (
    <div className="card bg-light" style={style.size}>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img className="card-img-top" href={props.link} src={props.image} alt={props.key}/>
      </a>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.synopsis}</p>
        <p>{props.authors}</p>
      </div>
      <button onClick={() => props.delORsav(props.id)} className={`btn ${window.location.pathname === "/saved" ? "btn-danger" : "btn-dark"}`}>{props.task}</button>
    </div>
  )
}

export default Card