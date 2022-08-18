import { useState } from 'react'
import './SignUpBtn.css'

function SignUpButton(props) {
  

  return (
    
        <button className='SignUpBtn'>
            {props.text}
        </button>
    
  )
}

export default SignUpButton
