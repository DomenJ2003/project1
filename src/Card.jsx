import { useState } from 'react'
import './Card.css'

function Card(props) {

  
  const [followers, setFollowers] = useState(1234)
  const [firstName, setFirstName] = useState('')

  const changeName = event=>{
    //console.log(event.target.value);
    
    setFirstName(()=>document.getElementById('ime-input').value)
    }


  return (
    <>
    <div className="Card">
      <div className="okvirSlike">
        <img className='slika' src="../public/bg-img.jpg" alt="" />
      </div>
      <div className="profil">
        <img className='profil-photo' src="../public/profil.jpg" alt="" />
      </div>
      <div className="splosni-podatki">
        <h3>{firstName} Primek</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere quisquam saepe nobis iure error, natus eos dolorem id illum.</p>
      </div>
      <div className="links">
 
        <p>
          <i className="fa-solid fa-location-dot"></i>
          Hungary
        </p>
        <a href="mailto:">
        <i className="fa-solid fa-envelope"></i>
          Email me
        </a>
      </div>
      <div className="followers-info">
        <div className="box">
          <b>{followers}</b>
          <p>Followers</p>
        </div>
        <div className="box">
          <b>15222</b>
          <p>Following</p>
        </div>
      </div>
      <button className="follow-btn-container" onClick={()=>setFollowers((followers)=>followers+1)}>
        Follow
      </button>
    </div>
    <input type="text" name="ime" id="ime-input" onChange={changeName}/>
    </>
  )
}

export default Card
