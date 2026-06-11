import type { WeddingInfo } from '../../../types/wedding'
import styles from './EventInfoLuxury.module.css'

type EventInfoLuxuryProps = {
  wedding: WeddingInfo
}

export function EventInfoLuxury({ wedding }: EventInfoLuxuryProps) {
  const backgroundImage = wedding.eventInfo.backgroundImage ?? wedding.gallery[3]?.src ?? wedding.heroImage
  const address = wedding.eventInfo.address ?? [wedding.eventInfo.location]
  const mapLabel = wedding.eventInfo.mapLabel ?? 'View on map'
  const description =
    wedding.eventInfo.description ??
    `Our wedding will take place at ${wedding.eventInfo.location}. We cannot wait to celebrate with you.`

  return (
    <section className={styles.section} id="informacion">
      <img className={styles.background} src={backgroundImage} alt="" aria-hidden="true" />
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={styles.panel}>
        <h2>{wedding.eventInfo.closingText}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.details}>
          <article className={styles.address}>
            <h3>Address</h3>
            <p>
              {address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <a href={wedding.mapsUrl} target="_blank" rel="noreferrer">
              {mapLabel}
            </a>
          </article>

          <article>
            <h3>Date & time</h3>
            <p>
              <span>{wedding.eventInfo.time}</span>
              <span>{wedding.eventInfo.date}</span>
            </p>
          </article>

          {wedding.eventInfo.transport && (
            <article>
              <h3>Transport</h3>
              <p>{wedding.eventInfo.transport}</p>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}
