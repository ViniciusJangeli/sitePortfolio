import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_onhutnk', form.current, 'ZXmSct0MQNVR_cE29')
      .then((result) => {
          alert('Mensagem enviada com sucesso!');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nome</label>
      <input type="text" name="contact_name" />
      <label>Email</label>
      <input type="email" name="contact_email" />
      <label>Numero</label>
      <input type="number"  name="contact_number" />
      <label>Mensagem</label>
      <textarea name="contact_message" />
      <input type="submit" value="Send" />
    </form>
  );
};