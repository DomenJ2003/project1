import { useState } from 'react'
import './LogInBtn.css'

function LogInButton(props) {
  

  return (
    
        <button className='LogInBtn'>
            {props.text}
        </button>
    
  )
}

export default LogInButton
