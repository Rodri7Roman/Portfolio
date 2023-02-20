import { useRef } from "react";
import "./styles.css";
import Canvas from "./Canvas";
const About = (props) => {
  const mostrarElemento = () => {
    let animado = document.querySelectorAll(".animado");
    let scroll = document.documentElement.scrollTop;
    for (let i = 0; i < animado.length; i++) {
      let alturaAnimado = animado[i].offsetTop;
      if (alturaAnimado - 500 < scroll) {
        animado[i].style.opacity = 1;
        animado[i].classList.add("mostrarArriba");
      }
    }
  };
  window.addEventListener("scroll", mostrarElemento);


  return (
    <div id="about" className="container-about animado">
      <div className="about-second">
        <h2 className="text-title">Sobre mí</h2>
        <div className="img-about">
          <img src="/img/kak.jpg" alt="" />
        </div>
        <p className="detail-portfolio margin-about">
          Hola! Soy Rodrigo Román, tengo 21 años.
          <p>
            Soy un apasionado por la tecnologia y los videojuegos. Estudio
            Ingeniería Informática desde 2020 en{" "}
            <a href="https://www.uade.edu.ar/" target="_blank" className="uade">
              UADE
            </a>{" "}
            con la ilusión de convertirme en Ingeniero. También di mi paso por{" "}
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              className="henry"
            >
              Henry
            </a>{" "}
            logrando terminar la carrera de Desarrollador Full Stack.
          </p>
        </p>
      </div>

      <div className="about-second animado">
        <div>
          <h2 className="text-title">Trayecto</h2>
          <p className="detail-portfolio">
            Desde muy chico despertó mi amor por los videojuegos, en el
            transcurso de mi vida logré darme cuenta que queria conocer el mundo
            que había por detrás. A los 17 años comencé estudiando cursos de
            Youtube. Luego a los 19 años, logré ingresar a{" "}
            <a href="https://www.uade.edu.ar/" target="_blank" className="uade">
              UADE
            </a>
            {""}, universidad en la cual actualmente estoy cursando la carrera
            Ingeniería Informática.
          </p>
          <p className="detail-portfolio">
            En 2022 comienza una etapa profundizando conocimientos en el mundo
            de Desarrollo Web. Opté por conseguir el Curso de Desarrollo Web y
            JavaScript de{" "}
            <a className="henry" target={"_blank"} href="coderhouse.com">
              CoderHouse
            </a>
            . Luego seguir el espectacular Bootcamp{" "}
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              className="henry"
            >
              Henry
            </a>{" "}
            el cual acabo de culminar.
          </p>
          <p className="detail-portfolio">
            Esto que acabas de leer fue mi recorrido hasta la actualidad, espero
            seguir aprendiendo mucho más sobre este mundo maravilloso y lograr
            grandes sueños.{" "}
          </p>
        </div>
        <h2 className="text-title">Tecnologías</h2>
        <div className="flex-tecnologias animado">
          <Canvas/>

          {/* <ul className="ul-about">
            <li>
              <p>JavaScript</p>
              <div className="progress">
                <span className="pintJS"></span>
              </div>
            </li>
            <li>
              <p>Redux</p>
              <div className="progress">
                <span className="pintRedux"></span>
              </div>
            </li>
            <li>
              <p>React</p>
              <div className="progress">
                <span className="pintReact"></span>
              </div>
            </li>
            <li>
              <p>Bootstrap</p>
              <div className="progress">
                <span className="pintBootstrap"></span>
              </div>
            </li>
            <li>
              <p>SASS</p>
              <div className="progress">
                <span className="pintSass"></span>
              </div>
            </li>
            <li>
              <p>CSS</p>
              <div className="progress">
                <span className="pintCSS"></span>
              </div>
            </li>
          </ul>

          <ul className="ul-about">
            <li>
              <li>
                <p>Python</p>
                <div className="progress">
                  <span className="pintPyhton"></span>
                </div>
              </li>
              <p>Express</p>
              <div className="progress">
                <span className="pintExpress"></span>
              </div>
            </li>
            <li>
              <p>PostgreSQL</p>
              <div className="progress">
                <span className="pintExpress"></span>
              </div>
            </li>
            <li>
              <p>Sequelize</p>
              <div className="progress">
                <span className="pintSequelize"></span>
              </div>
            </li>
            <li>
              <p>NodeJS</p>
              <div className="progress">
                <span className="pintNode"></span>
              </div>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default About;
