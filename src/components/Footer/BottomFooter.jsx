import React from 'react'
import shadIcon from '../../images/icons/Shad.svg'
import telegramIcon from '../../images/icons/telegram.svg'
import rubickaIcon from '../../images/icons/rubicka.svg'
import eitaIcon from '../../images/icons/eita.svg'
export default function BottomFooter() {
    return (
        <div className='bottom-footer'>
            <div className='footer-text'>

            </div>
            <div className='social'>
                <div>
                    <p>شبکه های اجتماعی  </p>
                    <div>
                        <img className='social-footer-icon' src={shadIcon} alt="" />
                        <img className='social-footer-icon' src={telegramIcon} alt="" />
                        <img className='social-footer-icon' src={rubickaIcon} alt="" />
                        <img className='social-footer-icon' src={eitaIcon} alt="" />

                    </div>
                </div>
            </div>
            <div className='gogorioCS'>

            </div>


        </div>
    )
}
