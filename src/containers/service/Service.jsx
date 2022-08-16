import React from 'react'
import {FcServices} from 'react-icons/fc';
import {MdMovieCreation} from 'react-icons/md';
import {MdDesignServices} from 'react-icons/md';
import {icon1, icon2, icon3} from './import';
import './service.css';
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
    {
        icon: icon1,
        title: 'Web Development',
        review: ' Develop software applications with an efficient and functional front-end web app, that rely on proven technology and frameworks.'
    },
    {
        icon: icon2,
        title: 'Content creation',
        review: '   Using HTML, CSS, JavaScript and React.js to bring concepts to life by writing dedicated solutions from scratch.'
    },
    {
        icon: icon3,
        title: 'Design',
        review: ' 1.Web  2.Mobile  3.UI/UX  '
    },
]

const Service = () => {
  return (
    <div className='container-fluid mt-4 overflow-x-hidden ' id="service">
        <h2 className='text-center font-bold mb-10 sm:text-2xl'>My Services</h2>
        <div className='row'>
            <div className='col-xl-4'>
                <div className='service-box'>
                    <span className='icon'>
                    <FcServices className='w-10 h-10 mt-1' />
                    </span>
                    <h3 className='font-bold mb-2 mt-3 text-xl sm:text-xl '>Web Development</h3>
                    <p className='mb-1'>
                    Develop software applications with an efficient and functional front-end web app, 
                    that rely on proven technology and frameworks.
                    </p>

                </div>

            </div>
            <div className='col-xl-4 p-2'>
                <div className='service-box'>
                    <span className='icon'>
                    <MdMovieCreation className='w-10 h-10 mt-1  ' />
                    </span>
                    <h3 className='font-bold text-xl sm:text-xl mt-3 mb-3'>Content creation</h3>
                    <p>
                    Using HTML, CSS, JavaScript and React.js to bring concepts to life by writing
                   dedicated solutions from scratch.
                    </p>

                </div>

            </div>
            <div className='col-xl-4'>
                <div className='service-box '>
                    <span className='icon'>
                    <MdDesignServices className='w-10 h-10 mb-2 ' />
                    </span>
                    <h3 className='font-bold text-xl sm:text-xl  mb-3'>Design</h3>
                    <p className='mb-1 '>UI/UX</p> 
                    <p className='mb-1'>Mobile</p>
                    <p>Web</p>
                </div>

            </div>
          
            
        </div>
           <Swiper className='sm:hidden container serivce__container '
            // install Swiper modules
                    modules={[ Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
     >
                {
                    data.map (({icon, title, review}, index) => {
                        return (
                            <SwiperSlide key={index} className='service-component'>
                               <div className='client__avatar'>
                                < img src={icon} alt="/" />
                               </div>
                               <h2 className='clinet__name text-1xl font-bold'>{title}</h2>
                               <h3 className='client__review'>{review}</h3>
                            </SwiperSlide>
                        )
                    })
                } 
           </Swiper>

    </div>
  )
}

export default Service
