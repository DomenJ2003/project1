import { useState } from 'react'
import './HomePage.css'
import Navbar from '../Sections/Navbar'
import HeroSection from '../Sections/HeroSection'
import HomePageContent from '../Sections/HomePageContent';

function HomePage(props) {
  

  return (
    <>
      <Navbar />
      <HeroSection />
      <HomePageContent />
    </>
  );
}

export default HomePage
