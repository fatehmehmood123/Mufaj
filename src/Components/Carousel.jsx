import React from 'react'
import './css/carousel.css'
import image from '../Images/carousel1.jpeg'
export default function Carousel  () {
  return (
    <div className="container">
        <div className="left">
        WELL <br />MAINTAINED <br />EQUIPMENT AT <br />AFFORDABLE PRICES
        </div>
        <div className="right">
         <img src={image}/>
        </div>
    </div>

  )
}
