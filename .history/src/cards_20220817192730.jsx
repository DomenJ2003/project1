import { useState } from "react";
import Card from "./Card";
import "./cards.css";
import axios from "axios";

function Cards(props) {
  let cards = [];

  for (let i = 0; i < props.num; i++) {
    cards.push(<Card key={i} />);
  }
  return <div className="ogrodje">{cards}</div>;
}

export default Cards;
