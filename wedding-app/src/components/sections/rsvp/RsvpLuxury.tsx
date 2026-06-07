import { useState, type FormEvent } from 'react'
import { submitRsvp } from '../../../services/rsvp'
import type { RsvpAttendance, WeddingInfo } from '../../../types/wedding'
import styles from './RsvpLuxury.module.css'

type RsvpLuxuryProps = {
  wedding: WeddingInfo
}

export function RsvpLuxury({ wedding }: RsvpLuxuryProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  if (!wedding.rsvp) {
    return null
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const fullName = String(formData.get('fullName') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const attending = String(formData.get('attending') ?? '') as RsvpAttendance
    const meal = String(formData.get('meal') ?? '').trim()
    const notes = String(formData.get('notes') ?? '').trim()

    if (!fullName || !email || !attending || !meal) {
      setMessage('Please complete the required fields.')
      return
    }

    try {
      setIsSubmitting(true)
      await submitRsvp({
        weddingSlug: wedding.slug,
        fullName,
        email,
        attending,
        meal,
        notes,
      })
      form.reset()
      setMessage('Thank you. Your RSVP has been sent.')
    } catch (error) {
      console.error(error)
      setMessage('We could not send your RSVP. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.section} id="rsvp">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2>{wedding.rsvp.title}</h2>
          <p>{wedding.rsvp.description}</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label>
                <span>Full name *</span>
                <input type="text" name="fullName" placeholder="John Smith" required />
              </label>

              <label>
                <span>Email *</span>
                <input type="email" name="email" placeholder="guest@gmail.com" required />
              </label>
            </div>

            <fieldset className={styles.attendance}>
              <legend>Will you be attending? *</legend>
              <label>
                <input type="radio" name="attending" value="yes" required />
                <span>Yes</span>
              </label>
              <label>
                <input type="radio" name="attending" value="no" />
                <span>No</span>
              </label>
            </fieldset>

            <label>
              <span>Meal choice *</span>
              <select name="meal" required defaultValue="">
                <option value="" disabled>
                  Select meal...
                </option>
                {wedding.rsvp.mealOptions.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Additional information</span>
              <textarea name="notes" placeholder="Hey, I'd like to let the bride & groom know..." />
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            {message && <p className={styles.status}>{message}</p>}
          </form>
        </div>

        <figure className={styles.photo}>
          <img src={wedding.rsvp.image} alt={wedding.rsvp.imageAlt} />
        </figure>
      </div>
    </section>
  )
}
