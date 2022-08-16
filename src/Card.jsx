import { useState } from 'react'
import './Card.css'

function Card() {
  // const [count, setCount] = useState(0)

  return (
    <div className="Card">
      <div className="okvirSlike">
        <img className='slika' src="../public/bg-img.jpg" alt="" />
      </div>
      <div className="splosni-podatki">
        <h3>Ana Lovefully</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, quis!</p>
      </div>
      <div className="links">
        <div className="country">
          Hungary
        </div>
        <div className="mail">
          Send email
        </div>
      </div>
    </div>
  )
}

export default Card
