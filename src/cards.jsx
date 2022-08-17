import { useState } from "react";
import Card from "./Card";
import './cards.css'

function Cards (props){
    console.log(props.num)

    return(
        <div className="ogrodje">
            {
                [...Array(props.num)].map((e, i) => <Card key={i}/>)
            }
        </div>
    );
}

export default Cards;