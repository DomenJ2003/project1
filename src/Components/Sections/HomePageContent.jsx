import { useState } from 'react'
import Card from '../General/Card';
import './HomePageContent.css'

function HomePageContent() {

  const card_data = [
    
    {
      'header': 'Prva karta',
      'content': 'descriptons...',
      'date': new Date(),
      'image' : 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
      'header': 'Druga karta',
      'content': 'descriptons...',
      'date': new Date(),
      'image' : 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
      'header': 'Tretija karta',
      'content': 'descriptons...',
      'date': new Date(),
      'image' : 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
      'header': 'Četrta karta',
      'content': 'descriptons...',
      'date': new Date(),
      'image' : 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
      'header': 'Peta karta',
      'content': 'descriptons...',
      'date': new Date(),
      'image' : 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
      'header': 'Šesta karta',
      'content': 'descriptons...',
      'date': new Date(),
      'image' : 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
      'header': 'Sedma karta',
      'content': 'descriptons...',
      'date': new Date(),
      'image' : 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
  ]

 
  
  return (
    <div className="homepage-content">
      <h1>Recent Activity</h1>
      <div className="cards-container">
        {card_data.map((card_data, index)=>(
          <Card key={index} {...card_data}/>
        ))}
      </div>
    </div>
  );
}

export default  HomePageContent