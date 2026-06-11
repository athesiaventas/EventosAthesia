import "./Navbar.css"
import logo from "../../assets/images/logo.png"

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__logo" href="/" aria-label="Athesia">
        <img src={logo} alt="" />
      </a>

      <nav className="navbar__links">
        <a href="#about">Nosotros</a>
        <a href="#testimonials">Testimonios</a>
        <a href="#packages">Paquetes</a>
        <a href="#portfolio">Trabajos</a>
      </nav>

      <a className="navbar__button" href="#contact">
        Contacto
      </a>
    </header>
  )
}

export default Navbar
