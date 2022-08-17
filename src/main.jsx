import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Card from './Card'
import Cards from './cards'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Card name="Ime Primek"/> */}
    <Cards num={10}/>
     
   
   
  </React.StrictMode>
)
