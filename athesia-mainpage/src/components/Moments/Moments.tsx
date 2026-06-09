import "./Moments.css"

import moment1 from "../../assets/images/moment1.png"
import moment2 from "../../assets/images/moment2.png"

import divider from "../../assets/icons/divider.png"

function Moments() {
  return (
    <section className="moments">

      <div className="moments__top">

        <div>

          <h2>
            Momentos maravillosos
            <br />
            personas maravillosas
          </h2>

          <div className="moments__divider">

            <span />

            <img
              src={divider}
              alt=""
            />

            <span />

          </div>

        </div>

        <p>
          Desde <strong>Athesia</strong> nos comprometemos a crear con el corazón
          y diseñar con rigor. Nos entregamos por completo a cada detalle de su
          invitación digital, porque entendemos que el preludio de su historia
          merece ser impecable e inolvidable. Su gran día es nuestra máxima
          inspiración.
        </p>

      </div>

      <div className="moments__images">
        <img src={moment1} alt="" />
        <img src={moment2} alt="" />
      </div>

    </section>
  )
}

export default Moments