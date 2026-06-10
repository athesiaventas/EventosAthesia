import "./Navbar.css"

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">✽</div>

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