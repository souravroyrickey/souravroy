import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import TypeWriter from './Typewriter';
import resume from './souravroy.pdf'
export default function
    () {
    const typeWriter = ["Subject Matter Expert", "Fusion Loan IQ Expert ", "Core Java Developer ", "Loan IQ SDK Developer", "Techno-Funtional Consultant"];
    return (
        <section id='profile'>
            <div class="profile-divider-bottom">
                <div className='profile-container'>
                    <div className='profile-parent'>
                        <div className='profile-details'>
                            <div className='colz'>
                                <div className='colz-icons'>

                                    <a href='https://www.facebook.com/worldofsourav'>
                                        <i className='fa fa-facebook-square' ></i>
                                    </a>
                                    <a href='https://www.instagram.com/roysourav_rickey/'>
                                        <i className='fa fa-instagram'></i>
                                    </a>
                                    <a href='https://www.linkedin.com/in/sourav-roy-b6221469/'>
                                        <i className='fa fa-linkedin-square'></i>
                                    </a>
                                </div>
                            </div>
                            <div className='profile-details-name'>
                                <p className='hi'>Hi There 😃 My name is</p>
                                <h1>Sourav Roy</h1>
                            </div>
                            
                                <div className='typewriter-holder'>
                                    
                                <p>
                                    <TypeWriter data={typeWriter} />
                                </p>
                                </div>

                                <div className='profile-details-tagline'>
                                    <p>If you like me raise your hand if not raise your standard</p>
                                </div>
                            <div className='profile-details-options'>
                                <a href='#contact'>
                                <button className='btn primary-btn'>Hire Me</button>
                                </a>
                                
                                <a href={resume} download="souravroy.pdf">
                                    <button className='btn highlighted-btn'>Get Resume</button>
                                </a>

                            </div>
                        </div>

                        <div className='profile-picture'>
                            <div className='profile-picture-background'>

                            </div>
                        </div>


                    </div>

                </div>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 119" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    )
}
