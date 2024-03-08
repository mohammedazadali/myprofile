import React, { useRef } from 'react'
import './Contact.css'
import { SocialIcon } from 'react-social-icons'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xcifmii', 'template_bpfo9fs', form.current, {
        publicKey: 'fKbHBp6NfqlP_w3Bf',
      })
      .then(
        () => {
          alert('Thank You For Contact Us');
        },
        (error) => {
          alert('Sorry Fill The Form');
          console.log(error.txt)
        },
      );
  };
  return (
   <section className="contact" id='contact'>
     <h1 className='contact-title'>Get Connect</h1>
    <div className="contact-box">
        <div className="social-contact">
          <p>Follow me on social media and get connect with me using the form
          Whether you have a project in mind or want to discuss the latest developments in web technology, I'm always open to collaboration. Let's embark on a journey to create digital experiences that stand out in the vast landscape of the internet.
          </p>
          <div className="social-icons">
         <span className='social-icon'><SocialIcon url="https://www.linkedin.com/in/mohammed-azad-ali-junior-webdeveloper-uiuxdesigner/"  target='_blank'/></span>
         <span className='social-icon'><SocialIcon url="https://www.instagram.com/brickwebdesigns/?next=%2F" /></span>
         <span className='social-icon'><SocialIcon url="https://x.com" /></span>
         <span className='social-icon'><SocialIcon url="https://pinterest.com" /></span>
         </div>
        </div>
       <div className="form">
       <form ref={form} onSubmit={sendEmail}>
            <label >Full Name <span>*</span></label>
            <input type="text" name='name' placeholder='Mohammed Azad Ali' required />
            <label >Email<span>*</span></label>
            <input type="email" name="email" placeholder='mohammed@gmail.com' required />
            <label >Message<span>*</span></label>
            <textarea name="message"  cols="30" rows="10" required></textarea>
            <button type="submit" className='con-btn'>Shoot</button>
        </form>
       </div>
    </div>
   </section>
  )
}

export default Contact