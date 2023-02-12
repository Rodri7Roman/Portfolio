import React from "react";
import Validation from "./Validation";
import "./styles.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Swal from "sweetalert2";

const Contact = (props) => {
  const location = props.location;
  const [userData, setUserData] = React.useState({
    from_name: "",
    email_id: "",
    asunto: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    from_name: "",
    email_id: "",
    asunto: "",
    message: "",
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

  const enviarMail = (event) => {
    // console.log(event.target)
    event.preventDefault();

    event.target.value = "Sending...";
    const serviceID = "default_service";
    const templateID = "template_ul0gdeq";

    emailjs
      .sendForm(serviceID, templateID, event.target, "vytz0H_RwD31BebmN")
      .then(
        () => {
          event.target.value = "Send Email";
          Swal.fire({
            background: "#000",
            color: "#fff",
            title: "Enviado!",
            text: "Muchas gracias por interesarte.",
            icon: "success",
            showConfirmButton: false,
            width: 400,
            heightAuto: 120,
            timer: 1700,
          });
        },
        (err) => {
          event.target.value = "Send Email";
          Swal.fire({
            background: "#000",
            color: "#fff",
            title: "Error!",
            text: "Intentalo de nuevo.",
            icon: "error",
            showConfirmButton: false,
            width: 400,
            heightAuto: 120,
            timer: 1700,
          });
        }
      )
      .then(() => {
        setUserData({
          from_name: "",
          email_id: "",
          asunto: "",
          message: "",
        });
      });
  };

  return (
    <div className="container-contact" id="contacto">
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
      <form id="form" className="form" onSubmit={enviarMail}>
        <div className="input-container">
          <input
            type="text"
            name="from_name"
            className="input"
            placeholder="Nombre"
            value={userData.from_name}
            onChange={handleInputChange}
            id="from_name"
          />
          {/* <label className="label" htmlFor="from_name"></label> */}
        </div>
        {errors.nombre && <p className="error">{errors.nombre}</p>}
        <div className="input-container">
          <input
            type="email"
            name="email_id"
            id="email_id"
            value={userData.email_id}
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
            value={userData.asunto}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <textarea
            name="message"
            className="text-area"
            placeholder="Mensaje"
            value={userData.message}
            onChange={handleInputChange}
            id="message"
          />
        </div>
        {errors.mensaje && <p className="error">{errors.mensaje}</p>}

        <div className="container-send">
          <button
            value="Send Email"
            id="button"
            type="submit"
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
