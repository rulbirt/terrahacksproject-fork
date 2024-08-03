import './ContactPage.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

//npm install emailjs-com --save

function sendEmail(){
  let parms = {
      name : document.querySelector(".name"),
      email : document.querySelector(".email"),
      subject : document.querySelector(".subject"),
      message : document.querySelector(".message-box")
  }
  emailjs.send("service_39gg8vq", "template_3h6z65x", parms).then(alert("Email Sent!!!"))
}

function ContactPage() {
  return(
    <div className="contact-form">
        <div className="title"><h1>Questions or Concerns? Contact Us!</h1></div>
        <div className="email-subject">
            <input type="name" placeholder="Name" className="name" />
            <input type="email" placeholder="Email" className="email" />
        </div>
        <input type="text" placeholder="Subject" className="subject" />
        <textarea type="text" placeholder="Message" className="message-box"></textarea>
        <button className="send-mail" type="submit" onClick={sendEmail}>Send</button>
    </div>
  );
}

export default ContactPage
