
import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1yd5oia',   // Replace with your actual EmailJS Service ID
        'template_h47csl3',  // Replace with your actual EmailJS Template ID
        form.current,
        't3KORAOVydZi2lI39'    // Replace with your actual EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          form.current.reset(); // Clear the form after sending
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (

    <div className='main'>

    <div className='left'>
        <h1> Got an <span className='idea'>Idea</span> <br/>for your <br/><span className='proj'>Project ?</span> </h1>
        <h2><br/>Embark on a journey of digital transformation with us. We’d love to learn more about you and what we can design and build together.</h2>
        <div className='details'>
            
            <div className='mail'>
            <img src="images/mail.svg" alt="mail" /> appwhizsolutions.official@gmail.com            
            </div>
            
            <div className='phone'>
            <img src="images/call.svg" alt="phone" />0716435472
            </div>
        </div>
    </div>


<div className='right'>
<section className="contact">
<h2>Contact Us</h2>
<form ref={form} onSubmit={sendEmail} className="contact-form">
<label>Name*</label>
<input type="text" name="from_name" placeholder="Your Name" required />

<label>Email*</label>
<input type="email" name="from_email" placeholder="Your Email" required />

<label>Phone*</label>
<input type="number" name="from_no" placeholder="Your Contact No" required />

<label>Message*</label>
<textarea name="message" placeholder="Enter Your Message Here" required />

<button type="submit" className="send-button">Send</button>
</form>
</section>

</div>

</div>


  );
};

export default Contact;

