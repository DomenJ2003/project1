import { useState } from "react";
import Card from "./Card";
import './cards.css'
import axios from 'axios';

let userData = {};

function Cards (props){
    
    const [isLoading, setIsLoading]= useState(true)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const getRandomUser = async ()=>{
        
        let data = {};
        await axios.get('https://randomuser.me/api').then((response)=>{
            data = response.data
            
            //let jsonData = JSON.parse(data)
            let result = data['results'][0];
            
        
            userData = {
                firstName:result['name']['first'],
                lastName:result['name']['last'],
                description:result['gender'],
                backgroundPhoto: '../public/bg-img.jpg',
                profilePhoto: result['picture']['large'],
                followers: getRandomInt(10000),
                following: getRandomInt(10000),
                location:result['location']['city'],
                email: result['email']
            }

            
        })
    }

    
      
    
    let cards = []

    
    for(let i = 0; i<props.num; i++){
        getRandomUser().then(()=>{
            cards.push(<Card key={i} data={userData}/>)
            console.log(cards)
            if(cards.length == 4){
                console.log("here");
                setIsLoading(false);
                return(
                    <h1>Konec</h1>
                    // <div className="ogrodje">
                    //     {
                    //         cards
                    //     }
                    // </div>
                );
                
            }
        });
        
    
    }

    return (
        <div>
            Loading Data
        </div>
    );



   
}

export default Cards;