import "./Portafolio.css"

import p1 from "../../assets/images/portafolio/P1.png"
import p2 from "../../assets/images/portafolio/P2.png"
import p3 from "../../assets/images/portafolio/P3.png"
import p4 from "../../assets/images/portafolio/P4.png"
import p5 from "../../assets/images/portafolio/P5.png"

const works = [p1, p2, p3, p4, p5]

function Portafolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__header">
        <h2>Nuestros trabajos</h2>
      </div>

      <div className="portfolio__grid">
        {works.map((image, index) => (
          <article key={index} className="portfolio__card">
            <img src={image} alt={`Trabajo ${index + 1}`} />
          </article>
        ))}
      </div>

      <div className="portfolio__see-more">
        <a href="#">Ver más →</a>
      </div>
    </section>
  )
}

export default Portafolio