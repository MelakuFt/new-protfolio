import React, {useState} from 'react'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const handleClose = () => setNav(!nav) 

  return (
    <div className='w-full h-[80px] z-10 bg-zinc-300 drop-shadow-lg '>
      <div className='px-2 flex justify-between item-center w-full h-full'>
          <div className='flex items-center'>
               <div className='flex items-center pl-8'>
                  <img src={logo} alt="log" className='overflow-y-hidden' />
                 <h4 className=' text-[#010117] hover:text-[#8C2E77] mr-4 sm:text-4xl font-sans'>M.F</h4>
               </div>
           <ul className='hidden lg:flex fixed w-screen   cursor-pointer text-xl justify-center items-center text-[#010117]'>
                <li className='hover:text-[#8C2E77]'><a href="#home" smooth={true} duration={500}>Home</a></li>
                <li className='hover:text-[#8C2E77]'><a href="#about" smooth={true} offset={-200} duration={500}>About Me</a></li>
                <li className='hover:text-[#8C2E77]'><a href="#My" smooth={true} offset={-50} duration={500}>Proficiency</a></li>
                <li className='hover:text-[#8C2E77]'><a href="#service" smooth={true} offset={-100} duration={500}>Services</a></li>
                <li className='hover:text-[#8C2E77]'><a href="#pro" smooth={true} offset={-50} duration={500}>Project</a></li>
                <li className='hover:text-[#8C2E77]'><a href="#blog" smooth={true} offset={-50} duration={500}>Contact</a></li>
          </ul>
          </div>
          <div className='lg:hidden mr-10  mt-10' onClick={handleClick}>
           {!nav ? <RiMenuLine size={27} className='w-5 ' /> : <RiCloseLine size={27} className='w-5' />}
          </div>    
      </div>
       <ul className={!nav ? 'hidden' : 'absolute items-center bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><a onClick={handleClose} href="#home" smooth={true} duration={500}>Home</a></li>
          <li className='border-b-2 border-zinc-300 w-full'><a onClick={handleClose} href="#about" smooth={true} offset={-200} duration={500}>About Me</a></li>
          <li className='border-b-2 border-zinc-300 w-full'><a onClick={handleClose} href="#My" smooth={true} offset={-50} duration={500}>Proficiency</a></li>
          <li className='border-b-2 border-zinc-300 w-full'><a onClick={handleClose} href="#service" smooth={true} offset={-100} duration={500}>Services</a></li>
          <li className='border-b-2 border-zinc-300 w-full'><a onClick={handleClose} href="#pro" smooth={true} offset={-50} duration={500}>Projects</a></li>
          <li className='border-b-2 border-zinc-300 w-full'><a onClick={handleClose} href="#blog" smooth={true} offset={-50} duration={500}>Contact</a></li>
       </ul> 
    </div>
  )
}

export default Navbar

