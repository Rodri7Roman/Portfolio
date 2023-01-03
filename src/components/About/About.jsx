import { NavLink } from "react-router-dom";
import "./styles.css";

const About = (props) => {
  return (
    <div className="container-about">
      <h2 className="text-title">Sobre mí</h2>
      <div className="img-about">
        <img src="/img/kak.jpg" alt="" />
      </div>
      <p className="detail-portfolio line-height">
        Hola! Soy Rodrigo Román, tengo 21 años.
        <p>
          Soy un apasionado por la tecnologia y los videojuegos. Estudio
          Ingeniería Informática desde 2020 en{" "}
          <a href="https://www.uade.edu.ar/" target="_blank" className="uade">
            UADE
          </a>{" "}
          con la ilusión de convertirme en Ingeniero. Actualmente estoy
          terminando mi gran etapa en{" "}
          <a href="https://www.soyhenry.com/" target="_blank" className="henry">
            Henry
          </a>{" "}
          cursando la carrera de Desarrollador Full Stack. Si queres conocerme
          un poco más, ingresa{" "}
          <NavLink to={"/about"} className="uade">
            Aquí
          </NavLink>
          .
        </p>
      </p>
      {props.location !== undefined && (
        <div className="about-second">
          <div>
            <h2 className="text-title">Trayecto</h2>
            <p className="detail-portfolio">
              Desde muy chico despertó mi amor por los videojuegos, en el
              transcurso de mi vida logré darme cuenta que queria conocer el
              mundo que había por detrás. A los 17 años comencé estudiando
              cursos de Youtube. Luego a los 19 años (2020), logré ingresar a{" "}
              <a
                href="https://www.uade.edu.ar/"
                target="_blank"
                className="uade"
              >
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
              . Luego seguir el espectacular Bootcamp de{" "}
              <a
                href="https://www.soyhenry.com/"
                target="_blank"
                className="henry"
              >
                SoyHenry
              </a>{" "}
              el cual acabo de finalizar.
            </p>
            <p className="detail-portfolio">
              Esto que acabas de leer fue mi recorrido hasta la actualidad,
              espero seguir aprendiendo mucho más sobre este mundo maravilloso
              que tan poco conocemos.{" "}
            </p>
          </div>
          <h2 className="text-title">Tecnologías</h2>
          <ul className="ul-about">
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
            <li>
              <p>Python</p>
              <div className="progress">
                <span className="pintPyhton"></span>
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
        </div>
      )}
    </div>
  );
};

export default About;
