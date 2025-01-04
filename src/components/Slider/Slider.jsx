import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import Dot from './dot'

export default function Slider() {
    var [counter, setCounter] = useState(1)
    var time;


    useEffect(() => {
         time = setTimeout(() => {
            if (counter < 4) {
                setCounter(counter + 1)
            }
            else {
                setCounter(1);
            }
        }, 8000,);
    }, [counter])


    function onClickDot(slideNumber){
        setCounter(slideNumber)
        clearTimeout(time)

    }
        return (
        <div className='slider'  >
            <Slide slideNumber={1} counter={counter} />
            <Slide slideNumber={2} counter={counter} />
            <Slide slideNumber={3} counter={counter} />
            <Slide slideNumber={4} counter={counter} />
            <div className='dot-countaner'>
                <Dot onClickDot={onClickDot} slideNumber={4} counter={counter} />
                <Dot onClickDot={onClickDot} slideNumber={3} counter={counter} />
                <Dot onClickDot={onClickDot} slideNumber={2} counter={counter} />
                <Dot onClickDot={onClickDot} slideNumber={1} counter={counter} />
            </div>
        </div>
    )
}
