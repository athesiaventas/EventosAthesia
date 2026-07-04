import { useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import "./ContactForm.css"
import logo from "../../assets/images/logogreen.png"

const packageContent = [
  "Eleccion entre multiples plantillas.",
  "Ubicacion con integracion a Google Maps",
  "Historia de la pareja (texto y 5 fotos)",
  "Codigo de vestimenta y programa del evento",
]

function ContactForm() {
  const [status, setStatus] = useState("")
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Faltan las variables de EmailJS.")
      return
    }

    try {
      setIsSending(true)
      setStatus("Enviando...")
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          event_date: formData.get("event_date"),
          package: formData.get("package"),
          package_content: packageContent.join("\n"),
          comments: formData.get("comments"),
        },
        { publicKey },
      )
      form.reset()
      setStatus("Formulario enviado. Te contactaremos pronto.")
    } catch (error) {
      console.error(error)
      setStatus("No se pudo enviar el formulario. Intentalo de nuevo.")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="contact-form-section" id="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__logo">
          <img src={logo} alt="" />
        </div>

        <div className="contact-form__intro">
          <h2>¡Hola!</h2>
          <p>
            Este formulario es para nosotros tener un mejor panorama de lo que deseas.
            Para asi poder diseñar y desarrollar justo a tu medida, para un dia tan especial.
          </p>
        </div>

        <label className="contact-form__field contact-form__field--full">
          <span>Nombre</span>
          <input name="name" type="text" placeholder="Carlos y Maria Laura" required />
        </label>

        <div className="contact-form__row">
          <label className="contact-form__field">
            <span>Telefono</span>
            <input name="phone" type="tel" placeholder="1234 4567" required />
          </label>

          <label className="contact-form__field">
            <span>Correo electronico</span>
            <input name="email" type="email" placeholder="carlos@mail.com" required />
          </label>
        </div>

        <label className="contact-form__field contact-form__field--full">
          <span>Fecha del evento</span>
          <input name="event_date" type="date" required />
        </label>

        <div className="contact-form__details">
          <fieldset className="contact-form__packages">
            <legend>Paquete</legend>

            {["Ruby", "Esmeralda", "Zafiro", "Topacio"].map((packageName, index) => (
              <label key={packageName}>
                <input
                  type="radio"
                  name="package"
                  value={packageName}
                  defaultChecked={index === 0}
                />
                <span>{packageName}</span>
              </label>
            ))}
          </fieldset>

          <div className="contact-form__content">
            <h3>Contenido del paquete</h3>
            <ul>
              {packageContent.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <label className="contact-form__field contact-form__field--full">
          <span>Comentarios</span>
          <textarea
            name="comments"
            placeholder="Contanos lo necesario para nosotros diseñar un resultado especialmente para vos."
          />
        </label>

        <p className="contact-form__note">
          Cuando esta informacion llegue a nosotros te vamos a contactar para entrar en detalles
          y dar inicio al proyecto!
        </p>

        <button type="submit" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar"}
        </button>

        {status && <p className="contact-form__status">{status}</p>}
      </form>
    </section>
  )
}

export default ContactForm
