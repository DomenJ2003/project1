import { useState, useEffect } from 'react'
import './HomePage.css'
import Navbar from '../Sections/Navbar'
import HeroSection from '../Sections/HeroSection'
import HomePageContent from '../Sections/HomePageContent';
import {getUsers} from '../../helper/api'

function HomePage(props) {

  

  return (
    <>
      <HeroSection />
      <HomePageContent />
    </>
  );
}

export default HomePage
