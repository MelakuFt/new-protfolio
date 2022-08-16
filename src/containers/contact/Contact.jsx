import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n0qr9wu', 'template_3c8jovq', form.current, 'el9vlrDsH9XhBHoWY')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="blog" className=' bg-gradient-to-b from-zinc-500 p-4 md:p-[6rem]  overflow-x-hidden'>
      <h5 className='text-center mb-3 font-bold sm:text-2xl text-xl' >Get In Touch</h5>
      <h2 className='text-center mb-10 font-bold sm:text-xl text-xl'>Contact Me</h2>

      <div className='container contact__container section__padding'>
         <div className='contact__options'>
           <article className='contact__option'>
             <MdOutlineMail className='contact__option-icon' />
             <h4 className='text-xl font-bold mb-2'>Email</h4>
             <h5>melades21@gmail.com</h5>
             <a href="mailto:melades21@gmail.com" target="_blank" rel="noreferrer" >Send a message</a>
           </article>
           <article className='contact__option'>
             <RiMessengerLine className='contact__option-icon' />
             <h4 className='text-xl font-bold mb-2'>Messenger</h4>
             <h5>Melaku Ftwi</h5>
             <a href="https://m.me/melaku.ftwi" target="_blank" rel="noreferrer" >Send a message</a>
           </article>
           <article className='contact__option'>
             <BsWhatsapp className='contact__option-icon' />
             <h4 className='text-xl font-bold mb-2'>WhatsApp</h4>
             <h5>+251943862091</h5>
             <a href="https://api.whatsapp.com/send?phone=+251943862091" target="_blank" rel="noreferrer" >Send a message</a>
           </article>
         </div>
         <form ref={form} onSubmit={sendEmail}>
           <input type="text" name="name" placeholder="Your Full Name" required />
           <input type="email" name="email" placeholder="Your Email" required />
           <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
           <button type='submit' className='btn btn-primary'>Send Message</button>
         </form>
      </div>
    </section>
  )
}

export default Contact