import "./Portafolio.css"

import p1 from "../../assets/images/portafolio/P1.png"
import p2 from "../../assets/images/portafolio/P2.png"
import p3 from "../../assets/images/portafolio/P3.png"
import p4 from "../../assets/images/portafolio/P4.png"
import p5 from "../../assets/images/portafolio/P5.png"

const works = [
  { image: p1, href: '/maria-jose' },
  { image: p2, href: '/ana-carlos' },
  { image: p3, href: '/daniel-emily' },
  { image: p4 },
  { image: p5 },
]

function Portafolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__header">
        <h2>Nuestros trabajos</h2>
      </div>

      <div className="portfolio__grid">
        {works.map(({ image, href }, index) => {
          const card = <img src={image} alt={`Trabajo ${index + 1}`} />

          return href ? (
            <a key={href} className="portfolio__card" href={href}>
              {card}
            </a>
          ) : (
            <article key={index} className="portfolio__card">
              {card}
            </article>
          )
        })}
      </div>

      <div className="portfolio__see-more">
        <a href="#">Ver más →</a>
      </div>
    </section>
  )
}

export default Portafolio
