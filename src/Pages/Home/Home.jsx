import React from 'react'
import './Home.css'
import Slider from '../../components/Slider/Slider'
import History from './History'
import GeneralContent from './GeneralContent'
import CardSlider from './CardSlider'

export default function Home() {
    const slides = [
        {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description"},
        {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description"},
        {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description"},
        {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description"},
        {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description"},
        {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description"},
        {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description"},
    ]

  return (
    <div>
        <div className='home-background'  ></div>
        <Slider />
        <History />
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div className='card-slider' >
            <CardSlider />
        </div>
        <GeneralContent />

    </div>
  )
}
