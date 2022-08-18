import { useState } from 'react'
import './navbar.css'
import Button from '../General/Button'
import LogInButton from '../General/LogInBtn'
import SignUpButton from '../General/SignUpBtn'

function Navbar() {
  
  return (
    <div className="hero-nav-section">
    <div className="navbar">
        <div className="logo">
            <img src="./logo.svg" alt="" />
        </div>
        <div className="findbarlinks">
            <div className="findbar">
                
                    <div className="search">
                        <input type="text" className='input-text'  placeholder='pizza, pub, Shanahans' />
                    </div>
                    <div className="line">
                            
                        </div>
                    <div className="city">
                        
                    <input type="text" className='input-city' defaultValue='Dublin' />
                    </div>
                    <div className="find">
                    <svg width={30} height={30} className="search-icon">
                            <path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"></path>
                        </svg>
                    </div>
              
            </div>
            <div className="links">
                <div className="link">
                    <span>
                        Restaurants
                    </span>
                    <span>
                        <svg width={24} height={24} className="arrow">
                            <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                        </svg>
                    </span>
                </div>
                <div className="link">
                <span>
                Home Services
                        
                    </span>
                    <span>
                        <svg width={24} height={24} className="arrow">
                            <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                        </svg>
                    </span>
                </div>
                <div className="link">
                <span>
                        Auto Services
                    </span>
                    <span>
                        <svg width={24} height={24} className="arrow">
                            <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                        </svg>
                    </span>
                </div>
                <div className="link">
                <span>
                        More
                    </span>
                    <span>
                        <svg width={24} height={24} className="arrow">
                            <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
        <div className="buttons">
    <Button text="For Businesses"/>
    <Button text="Write a Review"/>
    <LogInButton text="Log In"/>
    <SignUpButton text="Sign Up"/>
        </div>
        
    </div>
    </div>
  );
}

export default Navbar
