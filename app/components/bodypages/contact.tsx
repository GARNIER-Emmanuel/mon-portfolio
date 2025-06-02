"use client";

import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }


function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

    // Remplace ces valeurs par celles de ton compte EmailJS
    const serviceID = "service_vynmpr6";
    const templateID = "template_0q4wckm";
    const userID = "7WsyjKp_q5Z-vWdis";

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }, (error) => {
        alert("Erreur lors de l'envoi : " + error.text);
      });
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-info">
            <p><strong>Adresse :</strong> 15 route de margaux 33480 à Avensan</p>
            <p><strong>Email :</strong> manu.boidun@gmail.com</p>
            <p><strong>Téléphone :</strong> 06 61 74 29 19</p>
          </div>
          <div className="map-container">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.1234567890123!2d-0.123456789!3d44.678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552345678901234%3A0x1234567890abcdef!2s15%20Route%20de%20Margaux%2C%2043340%20Avensan!5e0!3m2!1sfr!2sfr!4v1234567890123"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Envoyer un message</h3>

          <label htmlFor="name">Nom</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Envoyer</button>

          {submitted && <p className="success-message">Merci pour votre message !</p>}
        </form>
      </div>
    </section>
  );
}
