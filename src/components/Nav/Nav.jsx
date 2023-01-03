import "./styles.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="logo-container">
            <NavLink to="/" className="container-img-logo">
              <img src="/img/icons8-r-64.png" alt="miLogo" />
              <p className="name">Román</p>
            </NavLink>

            <p className="desc">Full Stack Developer</p>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                Sobre mí
              </NavLink>
            </li>

            <NavLink to="/proyectos" className="nav-link">
              Mis proyectos
            </NavLink>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link last-link">
                Contacto
              </NavLink>
            </li>
          </ul>
          <div className="container-contacto">
            <a
              href="https://www.linkedin.com/in/rodrigo-roman-0a58811b0/"
              target="_blank"
              className="link-contact"
            >
              <img src="/img/icons8-linkedin.svg" alt="logo linkedin" />
            </a>

            <a
              href="https://github.com/Rodri7Roman"
              target="_blank"
              className="link-contact"
            >
              <img src="/img/icons8-github.svg" alt="logo github" />
            </a>

            <a
              href="mailto:romanrodri03@gmail.com"
              target="_blank"
              className="link-contact"
            >
              <img src="/img/icons8-gmail.svg" alt="logo gmail" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
