import React from 'react'
import './Slider.css'
export default function Slide({slideNumber,counter}) {
  return (
    <div className={`slider-img ${counter==slideNumber ? "scale" : "" }`} style={{
        backgroundImage:
            `url(/src/Images/Slider/slide${slideNumber}.jpeg)`,
            display:`${counter==slideNumber ? "block" : "none" } `
    }}>

    </div>
)
}
