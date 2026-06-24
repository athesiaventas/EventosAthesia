import "./Portafolio.css"

const works = [
  {
    href: "/maria-jose",
  },
  {
    href: "/ana-carlos",
  },
  {
    href: "/daniel-emily",
  },
]

function Portafolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__header">
        <h2>Nuestros trabajos</h2>
      </div>

      <div className="portfolio__grid">
        {works.map((work) => (
          <a key={work.href} className="portfolio__card" href={work.href}>
            <iframe
              src={work.href}
              loading="lazy"
              tabIndex={-1}
            />

          </a>
        ))}
      </div>
    </section>
  )
}

export default Portafolio
