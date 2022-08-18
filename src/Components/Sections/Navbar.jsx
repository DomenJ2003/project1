import { useState } from 'react'
import './navbar.css'
import Button from '../General/Button'
import LogInButton from '../General/LogInBtn'

function Navbar() {
  
  return (
    <div className="navbar">
        <div className="logo">
            <img src="./logo.svg" alt="" />
        </div>
        <div className="findbarlinks">
            <div className="findbar">
                
                    <div className="search">

                    </div>
                    <div className="city">

                    </div>
                    <div className="find">

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
    <Button/>
        </div>
        
    </div>
  );
}

export default Navbar
