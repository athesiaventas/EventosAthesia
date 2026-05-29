import type { WeddingInfo } from '../../../types/wedding'
import styles from './AccommodationLuxury.module.css'

type AccommodationLuxuryProps = {
  wedding: WeddingInfo
}

export function AccommodationLuxury({ wedding }: AccommodationLuxuryProps) {
  if (!wedding.accommodation) {
    return null
  }

  return (
    <section className={styles.section} id="hospedaje">
      <div className={styles.inner}>
        <figure className={styles.photo}>
          <img src={wedding.accommodation.image} alt={wedding.accommodation.imageAlt} />
        </figure>

        <div className={styles.copy}>
          <h2>{wedding.accommodation.title}</h2>
          <p className={styles.description}>{wedding.accommodation.description}</p>

          <div className={styles.options}>
            {wedding.accommodation.options.map((option) => (
              <article className={styles.option} key={option.title}>
                <h3>{option.title}</h3>
                {option.description && <p>{option.description}</p>}
                <a href={option.href} target="_blank" rel="noreferrer">
                  {option.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
