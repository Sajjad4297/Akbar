import React from 'react'

export default function Dot({slideNumber,counter,onClickDot}) {
    return (
        <div>
            <div className={`dot ${counter==slideNumber ? "active-dov" : "" }` } onClick={()=>onClickDot(slideNumber)} ></div>
        </div>
    )
}
