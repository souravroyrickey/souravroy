import React from 'react';
import './Nav.css';
import { useState } from 'react';
export default function Nav() {
    const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
        <a href='#' onClick={()=> setActiveNav('#')} className={activeNav==='#'?'active':''}>
        <i className='fa fa-home' ></i>
        </a>
        <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav==='#about'?'active':''}>
        <i className='fa fa-user' ></i>
        </a>
        <a href='#skills'onClick={()=> setActiveNav('#skills')} className={activeNav==='#skills'?'active':''}>
        <i className='fa fa-cogs' ></i>
        </a>
        <a href='#company' onClick={()=> setActiveNav('#company')} className={activeNav==='#company'?'active':''}>
        <i className='fa fa-briefcase' ></i>
        </a>
        <a href='#testimonials' onClick={()=> setActiveNav('#testimonials')} className={activeNav==='#testimonials'?'active':''}>
        <i className='fa fa-commenting' ></i>
        </a>
        <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}>
        <i className='fa fa-address-book' ></i>
        </a>
    </nav>

  )
}
