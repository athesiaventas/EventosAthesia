import type { WeddingInfo } from '../../../types/wedding'
import styles from './FooterLuxury.module.css'

type FooterLuxuryProps = {
  wedding: WeddingInfo
}

export function FooterLuxury({ wedding }: FooterLuxuryProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <a className={styles.monogram} href="#inicio" aria-label="Ir al inicio">
          {wedding.couple.monogram}
        </a>
        <span className={styles.dot} aria-hidden="true" />
        <nav className={styles.links} aria-label="Navegacion del footer">
          <a href="#historia">Our story</a>
          <a href="#informacion">Location</a>
          <a href="#itinerary">Schedule</a>
          <a href="#hospedaje">Travel & stay</a>
        </nav>
      </div>

      <nav className={styles.credit}>
        <a href="#">Website design by Athesia</a>
      </nav>
    </footer>
  )
}
