import emailjs from "emailjs-com";
import React from 'react';

export const ContactUs = () => {
  const form = document.getElementById('contactForm');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_onhutnk', form.current, 'ZXmSct0MQNVR_cE29')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Number</label>
      <input type="tel" name="number" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="send" />
    </form>
  );
};