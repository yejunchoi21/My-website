import React from 'react'
import './footer.css'
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">David Choi</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Portfolio</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.instagram.com/yejun.d.c/"><FiInstagram /></a>
                <a href="https://x.com/yejunchoi5"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; David Choi. All rights reserved.</small>
            </div>
        </footer>

        )
}
export default Footer       