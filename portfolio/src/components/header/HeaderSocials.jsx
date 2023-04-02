import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/chinmay-chougule-478909213/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Chinmay1292" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://instagram.com/chinmayc.in" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials