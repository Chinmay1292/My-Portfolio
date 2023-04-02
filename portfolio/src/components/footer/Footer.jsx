import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Chinmay Chougule</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills & Certifications</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Work Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/chinmay-chougule-478909213/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Chinmay1292" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://instagram.com/chinmayc.in" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer