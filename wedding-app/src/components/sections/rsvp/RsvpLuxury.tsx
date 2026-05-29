import type { FormEvent } from 'react'
import type { WeddingInfo } from '../../../types/wedding'
import styles from './RsvpLuxury.module.css'

type RsvpLuxuryProps = {
  wedding: WeddingInfo
}

export function RsvpLuxury({ wedding }: RsvpLuxuryProps) {
  if (!wedding.rsvp) {
    return null
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
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

            <button type="submit">Submit</button>
          </form>
        </div>

        <figure className={styles.photo}>
          <img src={wedding.rsvp.image} alt={wedding.rsvp.imageAlt} />
        </figure>
      </div>
    </section>
  )
}
