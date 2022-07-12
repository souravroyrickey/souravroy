import React from 'react';
import ME from '../../assets/Home/me.jpg';
import './About.css';

export default function About() {
  let linkedinme = "https://media-exp2.licdn.com/dms/image/C5103AQGaDOmur81mgA/profile-displayphoto-shrink_800_800/0/1555941934289?e=1663200000&v=beta&t=xRidqETPe7dxVqyVImzGp4htTespGIbmPAaH2o1xLGM";
  
  return (
    <section id='about'>
      <div className='about'>
      <h2>About Me</h2>
      </div>
      
    
      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-image'>
            <img src={linkedinme} alt="About Image" />
          </div>
        </div>
        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <span className='about-icon'><i className='fa fa-flask' /></span>
              <h5>Exprience</h5>
              <small>12+ years</small>
            </article>
            <article className='about-card'>
              <span className='about-icon'>
                <i className='fa fa-sitemap' />
              </span> 
              <h5>Organization Worked</h5>
              <small>5</small>
            </article>
            <article className='about-card'>
              <span className='about-icon'>
                <i className='fa fa-file-code-o' />
              </span>
              <h5>Projects</h5>
              <small>12+ projects implemented</small>
            </article>
          </div>
          <p>
          Techno-Functional Loan IQ Professional, having more than 10 years of experience in functional and technical aspect of Loan IQ, a leading Commercial Lending Software. 
Finastra Certified Associate – Fusion Loan IQ 7.5.1
Good Understanding and working capability on Loan IQ implementation, its configuration and interfacing it with various upstream/downstream systems of Banks and Financial organizations. 
ITILv3 Foundation Certified. 
IBM Cognos Business Analyst Certified
Strong learning ability coupled with strong analytical skills. Good communication skills and have a sound team work spirit. 
Well versed with working with customers and end-users for issue, new requirements, issue resolution, and support. 

           </p>
          <a href='#contact' className='btn primary-btn'>Let's Talk</a>
        </div>
      </div>
    </section>

  )
}
