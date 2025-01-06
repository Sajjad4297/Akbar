import React, { useContext } from 'react'
import { Context } from '../../Context'

export default function HeaderItems({value,scroll}) {
    const {bottomDiv,historyRef} = useContext(Context)
    function scrollHandler() {
        if (scroll == "contact") {
            bottomDiv.current.scrollIntoView({behavior: 'smooth'})
        }
        if (scroll == "history") {
            historyRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }
  return (
    <div className='navbar-items' onClick={()=>{scrollHandler()}} >{value}</div>
  )
}
