import { useState } from "react";
import Card from "./Card";
import "./cards.css";
import axios from "axios";

function Cards(props) {
  
  const [isLoading, setIsLoading]=useState(true)
  const [users, setUser] = useState([])

  const addNewUser = data =>{
    let newUser = {
      firstName: data["name"]["first"],
      lastName: data["name"]["last"],
      description: data["gender"],
      backgroundPhoto: "../public/bg-img.jpg",
      profilePhoto: data["picture"]["large"],
      followers: Math.floor(Math.random() * 10000),
      following: Math.floor(Math.random() * 10000),
      location: data["location"]["city"],
      email: data["email"],
    }

    users.push(newUser);

    if(users.length >= props.num){
      console.log('users set')
      setIsLoading(false);
    }
  }

  const handleGetUser = ()=>{
    axios.get("https://randomuser.me/api").then((res)=>{
      let jsonData = JSON.parse(res.request.response);
      let result = jsonData["results"][0];
      addNewUser(result)
    })
  }
  
  if(isLoading){
    for (let i = 0; i < props.num; i++) {
      handleGetUser();
    }

    return (
      <h2>We're loading data</h2>
    );
  }

  var cards = [];
  for (let i = 0; i < props.num; i++) {
    cards.push(<Card data={users[i]} key ={i}/>)
  }

  return <div className="ogrodje">{cards}</div>;
}

export default Cards;
