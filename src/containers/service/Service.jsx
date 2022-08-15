import React from 'react'
import {FcServices} from 'react-icons/fc';
import {MdMovieCreation} from 'react-icons/md';
import {MdDesignServices} from 'react-icons/md';
import './service.css';

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
      
    </div>
  )
}

export default Service
