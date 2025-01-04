import React, { useEffect, useState } from 'react'

export default function Slider() {
    var [counter, setCounter] = useState(1)
    var [Active, setActive] = useState(true)



    useEffect(() => {
        setActive(!Active)
        setTimeout(() => {
            if (counter < 4) {
                setCounter(counter + 1)
            }
            else {
                setCounter(1);
            }
        }, 8000,);
        setActive(!Active)
    }, [counter])
        return (
        <div className='slider'  >
            <div className={`slider-img ${Active ? "scale" : "scale2 "} `} style={{
                backgroundImage:
                    `url(/src/Images/Slider/slide${counter}.jpeg)`
            }}>

            </div>
        </div>
    )
}
