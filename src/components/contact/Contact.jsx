import React from "react";
import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {e.preventDefault();
        emailjs.sendForm('service_0c5up2d', 'template_v1irb08', form.current, {
        publicKey: 'fedZhh9wnwWfxXl6i',
        });
    };
    return (
        <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
            <article className="contact__option">
                <MdOutlineEmail className="contact__option-icon" />
                <h4>Email</h4>
                <h5>yejunchoi21@gmail.com</h5>
                <a href="mailto:yejunchoi21@gmail.com" target="_blank">Send a message</a>
            </article>



            <article className="contact__option">
                <BsWhatsapp className="contact__option-icon" />
                <h4>WhatsApp</h4>
                <h5>Number</h5>
                <a href="https://api.whatsapp.com/send?phone=14162745480" target="_blank" rel="noreferrer">
                Send a message
                </a>
            </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Your Full Name" name="name" required />
                <input type="email" placeholder="Your Email" name="email" required />
                <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
        </section>
  );
};

export default Contact;