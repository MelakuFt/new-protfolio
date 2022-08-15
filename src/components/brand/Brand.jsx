import React from 'react'
import me from '../../assets/me.JPG';
import cv from '../../assets/cv.jpg';
import './brand.css';
const Brand = () => {
  return (
    <div  className='w-full grid lg:grid-cols-2  bg-[#fff] overflow-y-hidden' id="about">
      <div className='w-full h-full group perspective '>    
      <div className='relative preserve-3d group-hover:my-rotate-y-180 duration-1000'>
      <div className='w-2/3  backface-hidden md:w-4/5 h-full cursor-pointer mt-20 ml-12'>
         <img src={me} alt='me' className='rounded-t-3xl rounded-b-3xl' />
      </div>
      </div>
      </div>
      <article className=' mt-10 sm:mt-20 '>
         <h2 className='text-center text-xl font-bold mb-2 md:text-2xl'>About Me</h2>
         <p className='text-1xl px-8 sm:px-2 md:px-0 md:text-xl'>I'm a web and mobile app developer who loves to solve problems creatively
            through communication and collaboration. I enjoy working on projects that 
            push me outside my comfort zone by challenging me to think in new ways, 
            use my creativity, or learn something entirely new.</p> 
          <h3 className='font-bold text-xl mt-2 mb-1 text-center'>Education</h3>   
         <p className='text-1xl px-8 sm:px-2 md:px-0 md:text-xl'> I graduated with Bachelor of Science Degree from Addis Ababa Institute of Technology</p> 
         <div className='flex gap-4 '>
        <a href={cv} download ><button className='border px-3 py-3 ml-12 mr-5 md:px-4 md:py-4 rounded-lg hover:bg-white bg-[#BABDC3]  font-bold mt-5'>Download CV</button></a>
        <a href="#blog" className='border px-3 py-3 md:px-4 md:py-4 rounded-lg hover:bg-white bg-[#BABDC3]  font-bold mt-5'><button >Let's Talk</button></a>
      </div>
      </article> 
     
    </div>
  )
}

export default Brand
