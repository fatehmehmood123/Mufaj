import React from 'react'
import './css/home.css'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'

export const Home = () => {
  return (
   <div className="mainContainer">
        <Navbar />
        
        <Footer />
   </div>

  )
}
