import type { WeddingInfo } from '../../../types/wedding'
import styles from './HeroLuxury.module.css'

type HeroLuxuryProps = {
  wedding: WeddingInfo
}

export function HeroLuxury({ wedding }: HeroLuxuryProps) {
  const leftPhoto = wedding.heroImage
  const rightPhoto = wedding.gallery[1]?.src ?? wedding.heroImage

  return (
    <section className={styles.section} id="inicio">
      <div className={`${styles.panel} ${styles.leftPanel}`}>
        <img src={leftPhoto} alt={`${wedding.couple.bride} y ${wedding.couple.groom}`} />
      </div>

      <div className={`${styles.panel} ${styles.rightPanel}`}>
        <img src={rightPhoto} alt="Retrato editorial de la pareja" />
      </div>

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.copy}>
        <p>The wedding of</p>
        <h1>
          {wedding.couple.bride} & {wedding.couple.groom}
        </h1>
        <span>{wedding.ceremonyText}</span>
      </div>
    </section>
  )
}
