import React from 'react'
import './css/home.css'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import Carousel from '../Components/Carousel'
import Products from '../Components/Products'
import { ContactUs } from '../Components/ContactUs'

export const Home = () => {
  return (
   <div className="mainContainer">
        <div className="nav">
        <Navbar />
        </div>
        <div className="carousel">
           <Carousel/>
        </div>
        <h1 id='products-section'>Our Products</h1>
        <div className="products">
           <Products/>
           <Products/>
           <Products/>
           <Products/>
           <Products/>
        </div>
        <h1 id='services-section'>Our Services</h1>
        <div  className="products">
           <Products/>
           <Products/>
           <Products/>
           <Products/>
           <Products/>
        </div>
        <h1 id='contact-section'>Contact Us</h1>
        <div className="contactUs">
          <ContactUs/>
        </div>
      <div className="footer">
        <Footer />
      </div>

   </div>

  )
}
