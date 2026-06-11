import "./Hero.css"

import background from "../../assets/images/background.png"
import ourworks from "../../assets/images/ourworks.png"

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="hero__brand">
          <svg className="hero__wordmark" viewBox="0 0 1000 245" role="img" aria-label="Athesia">
            <text x="0" y="218" textLength="1000" lengthAdjust="spacingAndGlyphs">
              Athesia
            </text>
          </svg>

          <div className="hero__subtext">
            <span>Diseño a la medida</span>
            <span>Hecho en Costa Rica</span>
          </div>
        </div>

        <div className="hero__bottom">
          <div>
            <h2>
              Creamos experiencias digitales
              <br />
              para momentos especiales
            </h2>

            <div className="hero__actions">
              <button>Contactanos</button>
              <button>Paquetes</button>
            </div>
          </div>

          <div className="hero__preview">
            <img src={ourworks} alt="Nuestro trabajo" />

            <p>Nuestro trabajo ↗</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
