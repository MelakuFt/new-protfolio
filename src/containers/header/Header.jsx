import React from 'react'
import cyber from '../../assets/cyber.png';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {SiUpwork} from 'react-icons/si';
import './header.css'


const Header = () => {
  return (
    <div id='home' className=' w-full h-screen bg-gradient-to-b from-zinc-400 flex flex-col justify-between -mt-10 overflow-x-hidden lg:w-full'>
            
        <div className='grid w-full lg:grid-cols-2 max-w-[1240px] m-auto'>
             <div className='flex flex-col sm:text-cente -mt-12 ml-12 justify-center md:items-start w-full  md:-mt-20'>
                   <p className='text-2xl text-[#010117]'>Hello,I'm</p>
                   <h1 className='py-3 text-2xl md:text-5xl font-bold text-[#010117]'>Melaku Ftwi</h1>
                   <h5 className='text-1xl md:text-4xl font-bold group text-[#010117]'>A <br className=' hidden md:hiddien'/> 
                   <span className='inline-flex h-20 pt-2 overflow-x-hidden animate-type 
                                   whitespace-nowrap text-brand-accent will-change-transform text-[#8C2E77]'>
                   Web developer,</span> and I execl at what I do.</h5> 
              </div> 
           
             <img className='w-full sm:w-full hover:animate-pulse mt-3 ' src={cyber} alt="cyber" />
            
            <div className='absolute flex flex-col py-3 sm:py-4 md:min-w-[760px] bottom-[-12%]  md:bottom-[-4%] px-2
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl  text-center shadow-xl'>
               <h4 className='text-sm  sm:text-2xl font-bold mb-2 '>Get Me</h4>
             <div className='flex justify-between flex-wrap px-4 '>
               <p className='flex px-4  py-2 text-[#010117] text-1xl  sm:text-xl'>
                 <a href="https://linkedin.com" target="_blank"  rel="noreferrer">
                   <BsLinkedin className='h-7 w-6 text-[#010117] md:h-8 sm:h-8 ' /></a>LinkedIn</p>
               <p className='flex px-4 py-2 text-[#010117] text-1xl  sm:text-xl'>
                 <a href="https://github.com" target="_blank"  rel="noreferrer">
                   <FaGithub className='h-7 w-6 md:h-8  text-[#010117] sm:h-8' /></a>Github</p>
               <p className='flex px-4 py-2 text-[#010117] text-1xl  sm:text-xl'>
                 <a href="https://upwork.com" target="_blank" rel="noreferrer">
                   <SiUpwork  className='h-7 ml-4 md:h-8 w-6  text-[#010117] sm:h-8'/></a>Freelancer-Upwork</p>
             </div>
             </div>
        </div>
        
    </div>
    
 
    )
}

export default Header
