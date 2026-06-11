import "./Footer.css"

import background from "../../assets/images/main_footer.png"

import mail from "../../assets/icons/mail.png"
import fb from "../../assets/icons/fb.png"
import ig from "../../assets/icons/ig.png"


function Footer() {
  return (
    <>
      <section
        className="footer-cta"
        id="contact"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="footer-cta__overlay" />

        <div className="footer-cta__content">

          <h2>
            Porque sabemos que la magia no solo está en ese momento especial,
            sino en el amor y cuidado con el que se planifica cada detalle
          </h2>

          <a className="footer-cta__button" href="mailto:athesia.ventas@gmail.com">Contáctanos</a>

        </div>
      </section>

      <footer className="footer">

        <div className="footer__top">

          <div className="footer__site">

            <h4>Sitio</h4>

            <nav>

              <a href="/">Inicio</a>
              <a href="#about">Nosotros</a>
              <a href="#testimonials">Testimonios</a>
              <a href="#packages">Paquetes</a>
              <a href="#portfolio">Trabajos</a>
              <a href="#contact">Contacto</a>

            </nav>

          </div>

          <div className="footer__contact">

            <h4>Athesia</h4>

            <div className="footer__socials">

              <img src={mail} alt="" />

              <img src={fb} alt="" />

              <img src={ig} alt="" />

            </div>

            <p>athesia.ventas@gmail.com</p>

            <p>Tel.: +506 7086 1296</p>

          </div>

        </div>

        <div className="footer__brand">
        <h2>Athesia</h2>

        <div className="footer__brand-subtext">
            <span>Diseño a la medida</span>
            <span>Hecho en Costa Rica</span>
        </div>
        </div>

        <div className="footer__bottom">

          <span>
            © 2026 Athesia Estudio Web
          </span>

          <div>

            <a>Términos y condiciones</a>

            <a>Legal</a>

          </div>

        </div>

      </footer>
    </>
  )
}

export default Footer
