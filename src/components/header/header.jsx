import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Me.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>David Choi</h1>
                <h5 className="text-light">Software Engineer</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>
            </div>
        </header>
    )
}
export default Header       