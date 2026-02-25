import React from 'react'
import './about.css'
import ME from '../../assets/image.png'
import { FaAward } from "react-icons/fa";

const About = () => {
    return (
        <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="about me image" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Software Engineer</h5>
                        <small>2nd year student at Mcmasters University</small>
                    </article>
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Interests</h5>
                        <small>Focusing on the Frontend and Backend Development</small>
                    </article>
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Graduation</h5>
                        <small>Graduated from Earl Haig Secondary School</small>
                    </article>
                </div>
                <p>
                    Hi, I'm David Choi, an undergraduate student at McMaster University. I enjoy building web applications, 
                    from dealing with UI to creating APIs and databases. I am always looking to improve my development skills to  become
                    a full stack developer.
        
                </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
        </section>
    )
}

export default About    