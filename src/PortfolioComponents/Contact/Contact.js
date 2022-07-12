import React , { useState } from 'react';
import "./Contact.css";

export default function Contact() {
 

  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <span className='contact-option-icon'><i className='fa fa-envelope' /></span>
            <h4>Email</h4>
            <h5>souravroy@gmail.com</h5>
            <a href='mailto:souravroy.rickey@gmail.com' target="_blank">Send Email</a>
          </article>
          <article className='contact-option'>
            <span className='contact-option-icon'><i className='fa fa-facebook-square' /></span>
            <h4>Messenger</h4>
            <h5>worldofsourav</h5>
            <a href='https://m.me/worldofsourav' target="_blank">Send Facebook Message</a>
          </article>
          <article className='contact-option'>
            <span className='contact-option-icon'><i className='fa fa-whatsapp' /></span>
            <h4>WhatsApp</h4>
            <h5>+91 88859 XXXXX</h5>
            <a href='https://api.whatsapp.com/send?phone=+918588805971' target="_blank">Send WhatsApp Message</a>
          </article>
        </div>
        <div className='form'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd2bLE-XM3b4uFHMZ2d6dnyUXsyJSfWLKHbQErBDb15y9RkwQ/viewform?embedded=true" 
        width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        {/*<form action=''>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn primary-btn'>Submit</button>
  </form>*/}
      </div>
    </section>

  )
}
