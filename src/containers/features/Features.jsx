import React from 'react'
import {  html, css, github, nextjs, react, js,  } from './import';
import './feature.css';
const Features = () => {
  const tech = [
    {
      id:1,
      src: react,
      title: "ReactJ", 
      Style: "shadow-blue-600",
    },
    {
      id:2,
      src: js,
      title: "JavaScript", 
      Style: "shadow-yello-500",
    },
    {
      id:3,
      src: nextjs,
      title: "Next.js", 
      Style: "shadow-white",
    },
    {
      id:4,
      src: html,
      title: "HTML", 
      Style: "shadow-orange-500",
    },
    {
      id:5,
      src: css,
      title: "CSS", 
      Style: "shadow-blue-500",
    },
    {
      id:6,
      src: github,
      title: "GitHub", 
      Style: "shadow-orange-400",
    },
    
  ]; 
  return (
   <div id="My" className='bg-gradient-to-b from-zinc-500 '>
     <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black'>
       <div>
         <p className='text-xl font-bold sm:text-2xl border-b-4 border-gray-500 p-1 inline '>
            Experience
         </p>
         <p className='py-4 sm:text-xl'>These are the technologies I've worked with</p>
       </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
         {tech.map (({id, src, title, style}) => (
           <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
             <img src={src} alt="/" className='w-20 mx-auto' />
             <p className='mt-4 font-bold sm:text-xl'>{title}</p>
           </div>
         ))}
      </div>
     </div>
   </div>
  )
}

export default Features
