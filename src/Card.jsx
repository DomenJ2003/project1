import { useState } from 'react'
import './Card.css'
import axios from 'axios';

function Card() {

  const[userData, setUserData]= useState({
    firstName:'Name',
    lastName:'Lastname',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere quisquam saepe nobis iure error, natus eos dolorem id illum.',
    backgroundPhoto: '../public/bg-img.jpg',
    profilePhoto: '../public/profil.jpg',
    followers: 1234,
    following: 512,
    location:'SI',
    email: 'neki@gmail.com'
  });
  //const [followers, setFollowers] = useState(1234)
  //const [firstName, setFirstName] = useState('')

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  const setRandomUser = async ()=>{
    // let newUser = Object.assign({}, userData);;
    // newUser.firstName = "Ime";
    // setUserData(newUser);
    let data = await axios.get('https://randomuser.me/api')
    let jsonData = JSON.parse(data.request.response)
    let result = jsonData['results'][0];
    
    setUserData({
      firstName:result['name']['first'],
    lastName:result['name']['last'],
    description:result['gender'],
    backgroundPhoto: '../public/bg-img.jpg',
    profilePhoto: result['picture']['large'],
    followers: getRandomInt(10000),
    following: getRandomInt(10000),
    location:result['location']['city'],
    email: result['email']
    })
  
  }
  
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
      <button className="follow-btn-container" onClick={setRandomUser}>
        Follow
      </button>
    </div>
    </>
  )
}

export default Card
