import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="flex-footer">
      <div className="container-logo">
        <a href="/" className={"logo"}>
          <img src="/img/icons8-r-64.png" alt="" />
        </a>
        <ul className="container-list-footer">
          <li>
            <a className={"link-nav"} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className={"link-nav"} href="#portfolio">
              Proyectos
            </a>
          </li>
          <li>
            <a className={"link-nav"} href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </div>

      <div className="container-redes">
        <h2 className="contact-text">Redes</h2>
        <div className="container-redes-footer">
          <div className="redes-footer">
            <img src="/img/icons8-github.svg" alt="logo" />
            <a target="_blank" href="https://www.github.com/Rodri7Roman">
              Rodri7Roman
            </a>
          </div>

          <div className="redes-footer">
            <img src="/img/icons8-linkedin.svg" alt="logo" />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rodrigo-roman-0a58811b0/"
            >
              Rodrigo Roman
            </a>
          </div>

          <div className="redes-footer">
            <img src="/img/icons8-gmail.svg" alt="logo" />
            <a
              href="mailto:romanrodri03@gmail.com"
              target="_blank"
              className="link-contact"
            >
              romanrodri03@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
