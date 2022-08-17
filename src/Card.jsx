import { useState } from 'react'
import './Card.css'

function Card(props) {

  const userData={
    'firstName':'Name',
    'lastName':'Lastname',
    'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere quisquam saepe nobis iure error, natus eos dolorem id illum.',
    'backgroundPhoto': '../public/bg-img.jpg',
    'profilePhoto': '../public/profil.jpg',
    'followers': 1234,
    'following': 512,
    'location':'Hungary',
    'email': 'neki@gmail.com'
  }
  
  //const [followers, setFollowers] = useState(1234)
  //const [firstName, setFirstName] = useState('')

  const changeName = event=>{
    //console.log(event.target.value);
    
    setFirstName(()=>document.getElementById('ime-input').value)
    }


  return (
    <>
    <div className="Card">
      <div className="okvirSlike">
        <img className='slika' src={userData.backgroundPhoto} alt="" />
      </div>
      <div className="profil">
        <img className='profil-photo' src={userData.profilePhoto} alt="" />
      </div>
      <div className="splosni-podatki">
        <h3>{userData.firstName} {userData.lastName}</h3>
        <p>{userData.description}</p>
      </div>
      <div className="links">
 
        <p>
          <i className="fa-solid fa-location-dot"></i>
          {userData.location}
        </p>
        <a href={"mailto:" + userData.email}>
        <i className="fa-solid fa-envelope"></i>
          Email me
        </a>
      </div>
      <div className="followers-info">
        <div className="box">
          <b>{userData.followers}</b>
          <p>Followers</p>
        </div>
        <div className="box">
          <b>{userData.following}</b>
          <p>Following</p>
        </div>
      </div>
      <button className="follow-btn-container" onClick={()=>setFollowers((followers)=>followers+1)}>
        Follow
      </button>
    </div>
    </>
  )
}

export default Card
