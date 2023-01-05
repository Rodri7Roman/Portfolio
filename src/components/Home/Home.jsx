import { NavLink } from "react-router-dom";
import Contact from "../Contact/Contact";
import Proyectos from "../Proyectos/Proyectos";
import About from "../About/About";
import "./styles.css";

const Home = (props) => {
  const hola = ["H", "o", "l", "a", ","];
  const nombre = [
    "S",
    "o",
    "y",
    " ",
    "R",
    "o",
    "d",
    "r",
    "i",
    "g",
    "o",
    " ",
    "R",
    "o",
    "m",
    "á",
    "n",
    ",",
  ];
  const web = ["w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r"];
  const full = [
    "F",
    "u",
    "l",
    "l",
    " ",
    "S",
    "t",
    "a",
    "c",
    "k",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  const mapLetras = (letra, i) => {
    return (
      <p className="letra" key={i}>
        {letra}
      </p>
    );
  };
  return (
    <div>
      <div className="container-home" id="home">
        <div className="container-text">
          <h1 className="text-bienvenida">
            {hola.map((letra, i) => {
              return mapLetras(letra, i);
            })}
            <br />
            {nombre.map((letra, i) => {
              return mapLetras(letra, i);
            })}
            <br />
            {web.map((letra, i) => {
              return mapLetras(letra, i);
            })}
          </h1>
          <p className="text-web">
            <span className="span-text">
              {full.map((letra, i) => {
                return <span key={i}>{letra}</span>;
              })}
            </span>
          </p>
        </div>
        <div className="container-contactame">
          <a href="#contacto">
            <button className="button-contactame">
              <span className="anim"></span>Contáctame
            </button>
          </a>
        </div>
      </div>
      <About />
      <Proyectos />
      <Contact />
    </div>
  );
};

export default Home;
