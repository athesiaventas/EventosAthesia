import type { WeddingInfo } from '../../../types/wedding'
import styles from './InvitationLuxury.module.css'

type InvitationLuxuryProps = {
  wedding: WeddingInfo
}

export function InvitationLuxury({ wedding }: InvitationLuxuryProps) {
  const photos = wedding.gallery.slice(0, 3)

  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.collage} aria-label="Recuerdos de la pareja">
          {photos.map((photo, index) => (
            <img key={photo.alt} className={styles[`photo${index + 1}`]} src={photo.src} alt={photo.alt} />
          ))}
        </div>

        <div className={styles.copy}>
          <p>{wedding.invitation.eyebrow}</p>
          <h2>{wedding.invitation.title}</h2>
          <span>{wedding.invitation.description}</span>
        </div>
      </div>
    </section>
  )
}
