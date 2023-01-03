import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="flex-footer">
      <div className="container-logo">
        <NavLink to="/home" className={"logo"}>
          <img src="/img/icons8-r-64.png" alt="" />
        </NavLink>
        <ul className="container-list-footer">
          <li>
            <NavLink className={"link-nav"} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={"link-nav"} to="/proyectos">
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink className={"link-nav"} to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="container-redes">
        <h2 className="contact-text">Contacto</h2>
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
