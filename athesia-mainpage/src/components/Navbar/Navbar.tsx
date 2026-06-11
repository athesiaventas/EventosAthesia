import { useEffect, useState } from "react"
import "./Navbar.css"
import logo from "../../assets/images/logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`navbar ${isOpen ? "navbar--open" : ""}`}>
      <a className="navbar__logo" href="/" aria-label="Athesia">
        <img src={logo} alt="" />
      </a>

      <nav className="navbar__links" aria-label="Navegacion principal">
        <a href="#about" onClick={closeMenu}>Nosotros</a>
        <a href="#testimonials" onClick={closeMenu}>Testimonios</a>
        <a href="#packages" onClick={closeMenu}>Paquetes</a>
        <a href="#portfolio" onClick={closeMenu}>Trabajos</a>
        <a className="navbar__mobile-contact" href="#contact" onClick={closeMenu}>Contacto</a>
      </nav>

      <a className="navbar__button" href="#contact">
        Contacto
      </a>

      <button
        className="navbar__toggle"
        type="button"
        aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}

export default Navbar
