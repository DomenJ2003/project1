import { useState } from 'react'
import './Card.css'

function Card() {
  // const [count, setCount] = useState(0)

  return (
    <div className="Card">
      <div className="okvirSlike">
        <img className='slika' src="../public/bg-img.jpg" alt="" />
      </div>
      <div className="profil">
        <img className='profil-photo' src="../public/profil.jpg" alt="" />
      </div>
      <div className="splosni-podatki">
        <h3>Ime Primek</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere quisquam saepe nobis iure error, natus eos dolorem id illum.</p>
      </div>
      <div className="links">
        <a href="#">
          Hungary
        </a>
        <a href="#">
          Email me
        </a>
      </div>
      <div className="followers-info">
        <div className="box">
          <b>1522</b>
          <p>Followers</p>
        </div>
        <div className="box">
          <b>15222</b>
          <p>Following</p>
        </div>
      </div>
      <div className="follow-btn-container">
        Follow
      </div>
    </div>
  )
}

export default Card
