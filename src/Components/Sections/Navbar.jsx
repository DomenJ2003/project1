import { useState } from 'react'
import './navbar.css'
import Button from '../General/Button'
import Dropdown from '../General/Dropodown'


function Navbar() {
  
  return (
    <div className="hero-nav-section">
    <div className="navbar">
        <div className="logo">
            <img src="./logo.svg" alt="" />
        </div>
        <div className="findbarlinks">
            <form>
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
            </form>
            <div className="links">
                <Dropdown name="Restaurants" links={['Delivery', 'Reservations', 'Burgers', 'Japanese', 'Chinese', 'Mexican', 'Italian', 'Thai']} />
                <Dropdown name="Home Services" links={['Contractors', 'Landscaping', 'Electricians', 'Locksmiths', 'Home Cleaners', 'Movers', 'HVAC', 'Plumbers']} />
                <Dropdown name="Auto Services" links={['Auto Repair', 'Car Dealers', 'Auto Detailing', 'Oil Change', 'Body Shops', 'Parking', 'Car Wash', 'Towing']} />
                <Dropdown name="More" links={['Dry Cleaning', 'Hair Salons', 'Phone Repair', 'Gyms', 'Bars', 'Massage', 'Nightlife', 'Shopping']} />   
            </div>
        </div>
        <div className="buttons">
            <Button text="For Businesses" classtype="btn"/>
            <Button text="Write a Review" classtype="btn"/>
            <Button text="Log In" classtype="LogInBtn"/>
            <Button text="Sign Up" classtype="SignUpBtn"/>
        </div>
        
    </div>
    </div>
  );
}

export default Navbar
