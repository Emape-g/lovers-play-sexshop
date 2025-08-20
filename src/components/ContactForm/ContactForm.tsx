import React, { useState } from "react";
import "./ContactForm.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("Gracias por tu mensaje, te responderemos pronto.");
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mensaje:
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;

