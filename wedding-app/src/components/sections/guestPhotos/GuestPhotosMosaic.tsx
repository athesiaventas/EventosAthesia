import { useGuestPhotos } from '../../../hooks/useGuestPhotos'
import type { WeddingInfo } from '../../../types/wedding'
import { GuestPhotoUploader } from './GuestPhotoUploader'
import styles from './GuestPhotosMosaic.module.css'

type GuestPhotosMosaicProps = {
  wedding: WeddingInfo
}

export function GuestPhotosMosaic({ wedding }: GuestPhotosMosaicProps) {
  const config = wedding.guestPhotos
  const { photos, removeBrokenPhoto } = useGuestPhotos(wedding.slug)

  if (!config) {
    return null
  }

  return (
    <section className={styles.section} id="fotos" aria-label="Fotos de invitados">
      <div className={styles.header}>
        <h2>{config.title}</h2>
        <p>{config.description}</p>
      </div>

      <div className={styles.uploader}>
        <GuestPhotoUploader wedding={wedding} />
      </div>

      {photos.length > 0 && (
        <div className={styles.scroller}>
          <div className={styles.mosaic} aria-live="polite">
            {photos.map((photo) => (
              <img
                src={photo.imageUrl}
                alt="Foto subida por invitado"
                key={photo.id}
                onError={() => removeBrokenPhoto(photo.id)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
