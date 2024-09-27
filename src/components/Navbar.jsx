import React from 'react'
import logo from "../assets/m.png"
import {FaLinkedin, FaGithub,FaInstagram, FaMailchimp, FaEnvelope } from 'react-icons/fa';
import { FaVoicemail } from 'react-icons/fa6';
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
               <img src={logo} className='mx-2' width={100} height={100} alt='Logo'/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/ms-maheswari" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
           <FaLinkedin /> 
            </a>
            <a href="https://github.com/ms-maheswari" target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
           <FaGithub /> 
            </a>
            <a href="mailto:mahes7439@gmail.com" target='_blank' rel='noopener noreferrer' aria-label='Email' type='mail'>
           <FaEnvelope /> 
            </a>
        </div>
    </nav>
  )
}

export default Navbar