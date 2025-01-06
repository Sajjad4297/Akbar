import React from 'react'
import NavbarItems from './NavbarItems'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className='navbar'>
            <NavbarItems value={"اخبار و اطلاعیه ها"} />
           <Link to="/teachers" >
            <NavbarItems value={"پرسنل و دبیران"} />
            </Link>
            <NavbarItems scroll="contact" value={"ارتباط با ما"} />
            <NavbarItems scroll="history" value={"تاریخچه"} />
        </div>
    )
}
