import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BsBook} from 'react-icons/bs'
import {BiBookReader} from 'react-icons/bi'

import {BiMessageSquareDetail} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {useState} from 'react'

function Nav() {
    const [activeNav, setActiveNav] = useState('about')
  return (
    <nav>
     <a href='#home' onClick={()=> setActiveNav('home')} className={activeNav === 'home' ? 'active': ''}><AiOutlineHome /></a>
     <a href='#about' onClick={()=> setActiveNav('about')} className={activeNav === 'about' ? 'active': ''}><BiBookReader /></a> 
     <a href='#My'onClick={()=> setActiveNav('My')} className={activeNav === 'My' ? 'active': ''}><BsBook /></a> 
     <a href='#service'onClick={()=> setActiveNav('service')} className={activeNav === 'service' ? 'active': ''}><RiServiceLine /></a> 
     <a href='#pro'onClick={()=> setActiveNav('pro')} className={activeNav === 'pro' ? 'active': ''}><AiOutlineFundProjectionScreen /></a> 
     <a href='#blog'onClick={()=> setActiveNav('blog')} className={activeNav === 'blog' ? 'active': ''}><BiMessageSquareDetail /></a> 

    </nav>
  )
}

export default Nav
