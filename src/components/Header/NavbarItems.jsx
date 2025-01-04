import React, { useContext } from 'react'
import { Context } from '../../Context'

export default function HeaderItems({value,scroll}) {
    const {bottomDiv} = useContext(Context)
  return (
    <div className='navbar-items' onClick={()=>{scroll && bottomDiv.current.scrollIntoView({behavior: 'smooth'})}} >{value}</div>
  )
}
