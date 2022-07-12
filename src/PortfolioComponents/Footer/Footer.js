import React from 'react'
import './Footer.css'
import image from '../../assets/Home/logo.png'
export default function Footer() {
    return (
        <section id='footer'>
            <footer>
                <div className='footer-logo'>
                    <img src={image} className='footer-logo'/>
                </div>
                

                <ul className='permalinks'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#company'>Organisations</a></li>
                    <li><a href='#testimonials'>Testimonials</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>

                <div className='footer_socials'>
                    <a href='https://www.facebook.com/worldofsourav' className='footer-icons'>
                        <i className='fa fa-facebook-square' ></i>
                    </a>
                    <a href='https://www.instagram.com/roysourav_rickey/' className='footer-icons'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/sourav-roy-b6221469/' className='footer-icons'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                </div>

                <div className='footer-copyright'>
                    <small>&copy; Sourav Roy. All rights reserved.</small>
                </div>
            </footer>
        </section>
    )
}
