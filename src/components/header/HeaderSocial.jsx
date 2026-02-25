import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
const HeaderSocial = () => {
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/yejun-choi-07413a383/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/yejunchoi21" target="_blank"><FaGithub /></a>
            <a href="https://devpost.com/yejunchoi21?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank"><SiDevpost /></a>
        </div>
    )
}
export default HeaderSocial