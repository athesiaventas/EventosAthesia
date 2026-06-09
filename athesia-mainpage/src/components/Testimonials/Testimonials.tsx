import "./Testimonials.css"

import JyM from "../../assets/images/testimonials/JyM.png"
import DyN from "../../assets/images/testimonials/DyN.png"
import CyJ from "../../assets/images/testimonials/CyJ.png"
import AyM from "../../assets/images/testimonials/AyM.png"

const testimonials = [
  {
    name: "José y María",
    date: "09/11/2024",
    image: JyM,
    text: "Queríamos que nuestro boda fuera especial desde el primer momento en que nuestros amigos recibieran la invitación."
  },

  {
    name: "Arturo y Mariana",
    date: "15/04/2025",
    image: AyM,
    text: "Decidimos prescindir del papel por una cuestión de practicidad y ecología."
  },

  {
    name: "Carla y Jorge",
    date: "18/01/2025",
    image: CyJ,
    text: "La página no solo se veía hermosa, también nos ayudó muchísimo."
  },

  {
    name: "Daniel y Nicole",
    date: "23/05/2026",
    image: DyN,
    text: "Recibimos comentarios hermosos de nuestros familiares."
  }
]

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="section-title">
        <h2>
          Hecho a la medida
          <br />
          porque lo merecen
        </h2>
      </div>

      <div className="testimonials__grid">

        {testimonials.map((item) => (

          <article className="testimonial-card" key={item.name}>

            <div className="testimonial-card__top">

              <img
                src={item.image}
                alt={item.name}
                className="testimonial-card__avatar"
              />

              <small>{item.date}</small>

            </div>

            <h3>{item.name}</h3>

            <p>{item.text}</p>

          </article>

        ))}

      </div>

    </section>
  )
}

export default Testimonials