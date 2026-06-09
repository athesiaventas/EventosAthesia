import "./About.css"
import aboutImage from "../../assets/images/iabout.png"

function About() {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <div className="about__text">
          <h2>Sobre nosotros</h2>

          <p>
            Nacimos del deseo de hacer que el primer vistazo a su evento sea algo
            inolvidable.
          </p>

          <p>
            Creemos que las invitaciones digitales no deben ser una simple
            herramienta de organización, sino el primer paso de una celebración
            extraordinaria.
          </p>

          <p>
            Nuestro propósito es fusionar una estética impecable con soluciones
            tecnológicas de primer nivel, encargándonos de toda la complejidad
            técnica en el trasfondo.
          </p>
        </div>

        <div className="about__image-wrapper">
          <img src={aboutImage} alt="Decoración floral Athesia" />
        </div>
      </div>
    </section>
  )
}

export default About