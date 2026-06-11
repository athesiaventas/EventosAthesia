import type { WeddingInfo } from '../../../types/wedding'
import styles from './ItineraryLuxury.module.css'

type ItineraryLuxuryProps = {
  wedding: WeddingInfo
}

export function ItineraryLuxury({ wedding }: ItineraryLuxuryProps) {
  if (!wedding.itinerary) {
    return null
  }

  return (
    <section className={styles.section} id="itinerary">
      <h2>{wedding.itinerary.title}</h2>

      <div className={styles.days}>
        {wedding.itinerary.days.map((day) => (
          <article
            className={`${styles.day} ${day.imagePosition === 'left' ? styles.imageLeft : styles.imageRight}`}
            key={day.title}
          >
            <div className={styles.copy}>
              <p className={styles.eyebrow}>{day.eyebrow}</p>
              <h3>{day.title}</h3>

              <div className={styles.events}>
                {day.events.map((event) => (
                  <div className={styles.event} key={`${day.title}-${event.time}-${event.title}`}>
                    <time>{event.time}</time>
                    <div>
                      <h4>{event.title}</h4>
                      <p>{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <figure className={styles.photo}>
              <img src={day.image} alt={day.imageAlt} />
            </figure>
          </article>
        ))}
      </div>
    </section>
  )
}
