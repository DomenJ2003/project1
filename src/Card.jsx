import { useState } from 'react'
import './Card.css'

function Card() {
  // const [count, setCount] = useState(0)

  return (
    <div className="Card">
      <div className="okvirSlike">
        <img className='slika' src="../public/bg-img.jpg" alt="" />
      </div>
      <div className="profil"></div>
      <div className="splosni-podatki">
        <h3>Ime Primek</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, odio!</p>
      </div>
      <div className="links">
        <a href="#">
          Hungary
        </a>
        <a href="#">
          Email me
        </a>
      </div>
      <div className="follow">
        Fo
      </div>
    </div>
  )
}

export default Card
