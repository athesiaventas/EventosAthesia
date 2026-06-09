import "./Packages.css"

const packages = [
  {
    name: "Paquete Rubí",
    price: "$50",
    color: "ruby",
    items: [
      "Elección entre múltiples plantillas",
      "Ubicación con Google Maps",
      "Historia de la pareja",
      "Código de vestimenta",
      "Control de confirmación",
    ],
  },

  {
    name: "Paquete Zafiro",
    price: "$150",
    color: "sapphire",
    items: [
      "Plantillas premium",
      "Múltiples dispositivos",
      "Google Maps",
      "Cuenta regresiva",
      "Confirmaciones",
    ],
  },

  {
    name: "Paquete Esmeralda",
    price: "$350",
    color: "emerald",
    items: [
      "Plantillas premium",
      "Adaptación completa",
      "Ubicación integrada",
      "Eventos",
      "Confirmaciones",
    ],
  },

  {
    name: "Paquete Amatista",
    price: "Personalizado",
    color: "amethyst",
    custom: true,
  },
]

function Packages() {
  return (
    <section className="packages" id="packages">

      <div className="packages__title">

        <h2>
          Para una celebración
          <br />
          extraordinaria,
          un proceso fluido
        </h2>

        <p>Simple y transparente</p>

      </div>

      <div className="packages__grid">

        {packages.map((pkg) => (
          <article
            key={pkg.name}
            className={`package-card ${pkg.color}`}
          >

            <h3>{pkg.name}</h3>

            <span>{pkg.price}</span>

            {!pkg.custom ? (
              <ul>

                {pkg.items?.map((item) => (
                  <li key={item}>{item}</li>
                ))}

              </ul>
            ) : (
              <p className="package-custom">
                Este paquete es para quienes desean sentarse con nosotros y
                diseñar el máximo resultado que desean.
              </p>
            )}

            <button>
              {pkg.custom
                ? "Contactar"
                : "Seleccionar"}
            </button>

          </article>
        ))}

      </div>

    </section>
  )
}

export default Packages