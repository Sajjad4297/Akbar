import React from 'react'
import phoneIcon from '../../images/icons/phone.svg'
import locationIcon from '../../images/icons/location.svg'
import arrowIcon from '../../images/icons/arrow.svg'

export default function TopFooter() {
    return (
        <div>
            <div className="top-footer">
                <div className='relation'>
                    <p>ارتباط با ما</p>
                </div>
                <img className='arrow-icon' src={arrowIcon} alt="" />
                <div className='left-divs'>
                    <div className='icon-div'><img className='top-footer-icon' src={locationIcon} alt="" /></div>
                    <p>خسروشاه، دبیرستان حاج اکبر شعوری</p>
                </div>
                <div className='left-divs'>
                    <div className='icon-div'><img className='top-footer-icon' src={phoneIcon} alt="" /></div>
                    <p>09141234567  |  04132443232 </p>
                </div>


            </div>

        </div>
    )
}
