import { useGuestPhotos } from '../../../hooks/useGuestPhotos'
import type { WeddingInfo } from '../../../types/wedding'
import { GuestPhotoUploader } from './GuestPhotoUploader'
import styles from './GuestPhotosFirebase.module.css'

type GuestPhotosFirebaseProps = {
  wedding: WeddingInfo
}

export function GuestPhotosFirebase({ wedding }: GuestPhotosFirebaseProps) {
  const config = wedding.guestPhotos
  const { photos, removeBrokenPhoto } = useGuestPhotos(wedding.slug)

  if (!config) {
    return null
  }

  return (
    <section className={styles.section} id="fotos">
      <div className={styles.header}>
        <h2>{config.title}</h2>
        <p>{config.description}</p>
      </div>

      <GuestPhotoUploader wedding={wedding} />

      <div className={styles.grid} aria-live="polite">
        {photos.map((photo) => (
          <img
            src={photo.imageUrl}
            alt="Foto subida por invitado"
            key={photo.id}
            onError={() => removeBrokenPhoto(photo.id)}
          />
        ))}
      </div>
    </section>
  )
}
