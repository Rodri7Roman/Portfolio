import "./styles.css";

const Proyectos = (props) => {
  return (
    <div className="container-portfolio" id="portfolio">
      <h2 className="text-title">Mis Proyectos</h2>
      <p className="detail-portfolio">
        Aquí se encuentra una galeria sobre mis proyectos realizados hasta la
        actualidad.{" "}
      </p>

      <section className="container-gallery">
        <div className="container-project">
          <a href="https://proyecto-final-client.vercel.app/" target="_blank">
            <img
              src="/img/yourDestiny.png"
              alt="Imagen proyecto Your Destiny"
            />
            <div className="view-project"></div>
          </a>
        </div>

        <div>
          <p className="detail-portfolio">
            E-Commerce sobre hoteleria utilizando la metodología ágil SCRUM.
            Realizada para el Proyecto Grupal de{" "}
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              className="henry"
            >
              SoyHenry
            </a>
            . Tecnologias utilizadas:{" "}
            <p className="technology">
              React, JavaScript, Redux, CSS, Bootstrap, Express, PostgreSQL,
              Firebase, EmailJs.
            </p>
          </p>
        </div>

        <div className="container-project">
          <a href="https://deploy-psi-seven.vercel.app" target="_blank">
            <img src="/img/dogs.png" alt="Imagen proyecto dogs" />
            <div className="view-project"></div>
          </a>
        </div>

        <div>
          <p className="detail-portfolio">
            SPA consumiendo{" "}
            <a
              target="_blank"
              href="https://thedogapi.com/"
              className="link-api"
            >
              The Dog API
            </a>
            , y también creando una base de datos. Realizada para el Proyecto
            Individual de{" "}
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              className="henry"
            >
              SoyHenry
            </a>
            . Tecnologias utilizadas:{" "}
            <p className="technology">
              React, JavaScript, Redux, CSS, Express, PostgreSQL.
            </p>
          </p>
        </div>

        <div className="container-project">
          <a href="https://rick-morty-green-three.vercel.app" target="_blank">
            <img src="/img/rick.jpeg" alt="Imagen proyecto rick&morty" />
            <div className="view-project"></div>
          </a>
        </div>

        <div>
          <p className="detail-portfolio">
            SPA consumiendo{" "}
            <a
              target="_blank"
              href="https://rickandmortyapi.com/"
              className="link-api"
            >
              The Rick & Morty API
            </a>
            , realizada en el transcurso de la carrera Full Stack Developer de{" "}
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              className="henry"
            >
              SoyHenry
            </a>
            . Tecnologias utilizadas:{" "}
            <p className="technology">React, JavaScript, Redux, CSS.</p>
          </p>
        </div>

        <div className="container-project">
          <a
            href="https://rodri7roman.github.io/entrega_final_DW/"
            target="_blank"
          >
            <img src="/img/jaja.jpg" alt="Imagen proyecto both care" />
            <div className="view-project"></div>
          </a>
        </div>

        <div>
          <p className="detail-portfolio">
            Primer app estática realizada para el curso de desarrollo web de{" "}
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              className="uade"
            >
              CoderHouse
            </a>{" "}
            . Esta es una página informativa ofreciendo servicios de salud.
            Tecnologias utilizadas:{" "}
            <p className="technology">CSS, SASS, HTML.</p>
          </p>
        </div>

        <div className="container-project">
          <img
            src="/img/Process-rafiki.png"
            alt="Imagen proyecto en progreso"
          />
        </div>

        <div>
          <p className="detail-portfolio">
            Videojuego realizado con Python realizado en la universidad{" "}
            <a href="https://www.uade.edu.ar/" target="_blank" className="uade">
              UADE
            </a>{" "}
            cursando la carrera Ingenieria Informática. Teconologías utilizadas:
            <p className="technology">Python.</p>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
