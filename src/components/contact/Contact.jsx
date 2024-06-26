import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BiLogoMessenger} from 'react-icons/bi'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
        <HiOutlineMail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>maitymoumita22@gmail.com</h5>
          <a href="mailto:maitymoumita22@gmail.com">Send an Email</a>
        </article>

        <article className="contact__option">
          <BiLogoMessenger className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>sangita.maity.29</h5>
          <a href="http://m.me/Dr.%20Moumita%20Maity">Send a Message</a>
        </article>
        
        <article className="contact__option">
          <FaWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+916295202991</h5>
          <a href="https://api.whatsapp.com/send?phone=916295202991">Send a text</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
    
      <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7'" placeholder='Drop a Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Mesage</button>

      </form>
    </div>
  </section>
  )
}

export default Contact