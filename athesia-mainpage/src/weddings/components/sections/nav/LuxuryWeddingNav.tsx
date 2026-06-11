import { useState } from 'react'
import type { WeddingInfo } from '../../../types/wedding'
import styles from './LuxuryWeddingNav.module.css'

type LuxuryWeddingNavProps = {
  wedding: WeddingInfo
}

export function LuxuryWeddingNav({ wedding }: LuxuryWeddingNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
      <a className={styles.monogram} href="#inicio" aria-label="Ir al inicio" onClick={closeMenu}>
        {wedding.couple.monogram}
      </a>

      <button
        className={styles.menuButton}
        type="button"
        aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span aria-hidden="true" />
      </button>

      <nav className={styles.links} aria-label="Navegacion de la invitacion">
        <a href="#historia" onClick={closeMenu}>
          Our story
        </a>
        <a href="#informacion" onClick={closeMenu}>
          Location
        </a>
        <a href="#itinerary" onClick={closeMenu}>
          Schedule
        </a>
        <a href="#hospedaje" onClick={closeMenu}>
          Travel & stay
        </a>
        <a className={styles.rsvp} href="#rsvp" onClick={closeMenu}>
          RSVP
        </a>
      </nav>
    </header>
  )
}
