import { useState } from "react";
import Card from "./Card";
import "./cards.css";
import axios from "axios";

let userData = {};

function Cards(props) {
  for (let i = 0; i < props.num; i++) {
    cards.push(<Card key={i} data={userData} />);

    return (
      <h1>Konec</h1>
      // <div className="ogrodje">
      //     {
      //         cards
      //     }
      // </div>
    );
  }
}

export default Cards;
