import { useState } from 'react'
import './navbar.css'
import Button from '../General/Button'
import Dropdown from '../General/Dropodown'
import Searchbar from '../General/Serchbar';


function Navbar() {
  
  return (
    <div className="hero-nav-section">
    <div className="navbar">
        <div className="logo">
            <img src="./logo.svg" alt="" />
        </div>
        <div className="findbarlinks">
            <Searchbar />
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
