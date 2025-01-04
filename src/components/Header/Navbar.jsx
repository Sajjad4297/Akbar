import React from 'react'
import NavbarItems from './NavbarItems'

export default function Navbar() {
    return (
        <div className='navbar'>
            <NavbarItems value={"اخبار و اطلاعیه ها"} />
            <NavbarItems value={"پرسنل و دبیران"} />
            <NavbarItems value={"ارتباط با ما"} />
            <NavbarItems value={"درباره ما"} />
        </div>
    )
}
