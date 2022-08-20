import { useState } from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container" onClick={props.onClickFunction}>
      <div className="card-header">
        <span className="card-title">
          <i className="fa-solid fa-user"></i>
          {"  "}
          {props.header}
        </span>
        <br />
        <span>{props.date}</span>
      </div>
      <div className="card-content">
        {props.content}
        <img src={props.image} className="card-image" />
      </div>
    </div>
  );
}

export default Card;
