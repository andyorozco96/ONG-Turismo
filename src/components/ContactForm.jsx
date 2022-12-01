import React, { useState } from "react";
import validate from "./validate";
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";

import style from "../scss/components/contactForm.module.scss";

function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    setErrors(validate(values));
  };

  const sendEmail = (e) => {
    Swal.fire({
      text: "Message send successfully",
      icon: "success",
      iconColor: "rgb(62, 138, 62)",
      showCloseButton: true,
      confirmButtonText: "Continue",
      allowEnterKey: false,
      customClass: {
        popup: "Alert",
        closeButton: "closeButton",
        confirmButton: "confirmButton",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setValues({
          name: "",
          email: "",
          message: "",
        });
      }
    });
  };

  return (
    <form
      action="https://formsubmit.co/orozco.andres.dev@gmail.com"
      method="POST"
      target="_blank"
    >
      <input
        onChange={(e) => handleChange(e)}
        placeholder="Nombre completo"
        type="text"
        name="name"
        value={values.name}
      />
      {errors.name && <span className={style.errors}>* {errors.name}</span>}
      <input
        onChange={(e) => handleChange(e)}
        placeholder="Tu dirección de email"
        type="email"
        name="email"
        value={values.email}
      />
      {errors.email && <span className={style.errors}>* {errors.email}</span>}
      <textarea
        rows="5"
        onChange={(e) => handleChange(e)}
        placeholder="Por favor, escribe tu mensaje"
        name="message"
        value={values.message}
      />
      {errors.message && (
        <span className={style.errors}>* {errors.message}</span>
      )}
      <button
        type="submit"
        disabled={Object.keys(errors).length <= 0 ? false : true}
        onSubmit={sendEmail}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
