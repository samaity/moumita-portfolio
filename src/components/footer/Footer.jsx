import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import LOGO from '../../assets/logo.jpeg'

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a href="#" className='footer__logo'>
        <img src={LOGO} alt="Dr. Moumita's Logo" />
      </a>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expertise</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href="https://www.facebook.com/profile.php?id=100094894981259" target="_blank" rel="noreferrer"><BsFacebook /></a>
        <a href="https://www.linkedin.com/in/dr-moumita-maity-604b4b118/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://www.instagram.com/drmoumitamaity/" target="_blank" rel="noreferrer"><BsInstagram /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Moumita Maity. All rights reserved.</small>
      </div>
    </footer>

  )
}

export default Footer