import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import './footer.css'

function Footer() {
  return (
    <footer className='bg-zinc-400'>
     <a href='#me' className='footer__logo'>Melaku F.</a>
     <ul className='permalinks'>
         <li><a href='#home' className='text-xl'>Home</a></li>
         <li><a href='#about' className='text-xl'>About Me</a></li>
         <li><a href='#My' className='text-xl'>Proficiency</a></li>
         <li><a href='#service' className='text-xl'>Services</a></li>
         <li><a href='#pro' className='text-xl'>Projects</a></li>
         <li><a href='#blog' className='text-xl'>Contact</a></li>
     </ul>
     <div className='footer__socials'>
         <a href='https://facebook.com'><FaFacebookF /></a>
         <a href='https://instagram.com'><FiInstagram /></a>
         <a href='https://twitter.com'><IoLogoTwitter /></a>
     </div>
     
     <div className='card-p'>
     <p>"The distance between dreams and reality is called discipline" <br />--Paulo Coelho | Abraha Ftwi (Big brother, Mentor everything...)</p>
       <p>To all my friends Alexander B. Samuel M. Mewail G. <br /> thanku you!!!</p>
     </div>
     <div className='footer__copyright'>
         <small>
             &copy; 2022 Melaku personal protfolio. All right reserved
         </small>
     </div>

    </footer>
  )
}

export default Footer
