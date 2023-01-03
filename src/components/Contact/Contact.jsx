import React from "react";
import Validation from "./Validation";
import "./styles.css";
import { useState } from "react";

const Contact = (props) => {
  const location = props.location;
  const [userData, setUserData] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [buttonActive, setButtonActive] = useState(false);

  const handleInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      Validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <div className="container-contact">
      <h2 className="text-title">Contactame</h2>
      {location === "/contacto" && (
        <div>
          <p className="detail-portfolio">
            Me gustaria poder encontrar mi primer empleo en el sector IT. Si
            tienes alguna pregunta o consulta no dudes en usar el formulario.
            Saludos!
          </p>
        </div>
      )}
      <form
        action="https://formsubmit.co/romanrodri03@gmail.com"
        method="POST"
        className="form"
      >
        <div className="input-container">
          <input
            type="text"
            name="nombre"
            className="input"
            placeholder="Nombre"
            onChange={handleInputChange}
          />
          <label className="label"></label>
        </div>
        {errors.nombre && <p className="error">{errors.nombre}</p>}
        <div className="input-container">
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}
        <div className="input-container">
          <input
            type="text"
            name="asunto"
            className="input"
            placeholder="Asunto"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <textarea
            name="mensaje"
            className="text-area"
            placeholder="Mensaje"
            onChange={handleInputChange}
          ></textarea>
        </div>
        {errors.mensaje && <p className="error">{errors.mensaje}</p>}

        <div className="container-send">
          <button
            disabled={
              errors.nombre || errors.email || errors.mensaje
                ? !buttonActive
                : buttonActive
            }
            className={
              errors.nombre || errors.email || errors.mensaje
                ? "button-create-off"
                : "button-create-on"
            }
          >
            <span className="anim"></span>Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
