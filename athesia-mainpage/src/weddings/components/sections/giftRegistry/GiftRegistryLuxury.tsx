import type { WeddingInfo } from '../../../types/wedding'
import styles from './GiftRegistryLuxury.module.css'

type GiftRegistryLuxuryProps = {
  wedding: WeddingInfo
}

export function GiftRegistryLuxury({ wedding }: GiftRegistryLuxuryProps) {
  if (!wedding.giftRegistry) {
    return null
  }

  return (
    <section className={styles.section} id="regalos">
      <img className={styles.background} src={wedding.giftRegistry.image} alt={wedding.giftRegistry.imageAlt} />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.copy}>
        <p>{wedding.giftRegistry.eyebrow}</p>
        <h2>{wedding.giftRegistry.title}</h2>
        <span>{wedding.giftRegistry.description}</span>

        <div className={styles.links}>
          {wedding.giftRegistry.links.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
