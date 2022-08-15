import React from 'react'
import {car, market, protfolio, construction, ai, restura} from './import'
import './project.css';
const Project = () => {
  const data = [
    {
      id:1,
      image: ai,
      title: "What is gpt-3",
      github: 'https://github.com/MelakuFt/project-gpt3',
      demo: 'https://projectdomain.netlify.app',
    },
    {
      id:2,
      image: protfolio,
      title: "Personal Portfolio",
      github: 'https://github.com/MelakuFt/personal-protfolio',
      demo: 'https://melaa.netlify.app',
    }, 
    {
      id:3,
      image: car,
      title: "Car maintenance service in Addis Ababa",
      github: '/',
      demo: '/',
    }, 
    {
      id:4,
      image: construction,
      title: "Des.Construction Company",
      github: '/',
      demo: '/',
    }, 
    {
      id:5,
      image: market,
      title: "H.M Supermaket",
      github: '/',
      demo: '/',
    }, 
    {
      id:6,
      image: restura,
      title: "Restaurant",
      github: '/',
      demo: '/',
    }, 
    
  ]
  return (
    <section id="pro" className='p-[6rem] overflow-x-hidden'>
       <h1 className='text-center text-xl sm:text-2xl font-bold mb-5' >My Portfolio</h1>
       <h2 className='text-center text-xl sm:text-xl font-bold mb-5'>Check out some of my work!</h2>
       <div className='portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                 <img src={image} alt={title} />
              </div>
              <h3 className='mt-4  mb-3 text-xl font-bold'>{title}</h3>
              <div className='portfolio__item-cta'>
              <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
              <a href={demo} className='btn btn-pramery' target="_blank" rel="noreferrer">View Project</a>
              </div>
           </article>
            )
          })
        }
         
       </div>
    </section>
  )
}

export default Project
