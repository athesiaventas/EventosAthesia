import { useEffect, useState } from 'react'
import { useGuestPhotos } from '../../../hooks/useGuestPhotos'
import type { WeddingInfo } from '../../../types/wedding'
import { GuestPhotoUploader } from './GuestPhotoUploader'
import styles from './GuestPhotosStack.module.css'

type GuestPhotosStackProps = {
  wedding: WeddingInfo
}

export function GuestPhotosStack({ wedding }: GuestPhotosStackProps) {
  const [activePhoto, setActivePhoto] = useState(0)
  const stackOffsets = [-3, -2, -1, 0, 1, 2, 3]
  const config = wedding.guestPhotos
  const { photos, removeBrokenPhoto } = useGuestPhotos(wedding.slug)

  useEffect(() => {
    if (activePhoto >= photos.length) {
      setActivePhoto(0)
    }
  }, [activePhoto, photos.length])

  if (!config) {
    return null
  }

  const getPhoto = (offset: number) => {
    const index = ((activePhoto + offset) % photos.length + photos.length) % photos.length
    return photos[index]
  }

  const previousPhoto = () => {
    setActivePhoto((photo) => (photo === 0 ? photos.length - 1 : photo - 1))
  }

  const nextPhoto = () => {
    setActivePhoto((photo) => (photo + 1) % photos.length)
  }

  return (
    <section className={styles.section} id="fotos" aria-label="Fotos de invitados">
      <div className={styles.heading}>
        <p>{config.title}</p>
        <span>{config.description}</span>
      </div>

      <GuestPhotoUploader wedding={wedding} />

      {photos.length > 0 && (
        <>
          <div className={styles.stack} aria-live="polite">
            {stackOffsets.map((offset) => {
              const photo = getPhoto(offset)

              return (
                <img
                  key={`${photo.id}-${offset}`}
                  src={photo.imageUrl}
                  alt={offset === 0 ? 'Foto subida por invitado' : ''}
                  className={styles.card}
                  data-offset={offset}
                  aria-hidden={offset !== 0}
                  onError={() => removeBrokenPhoto(photo.id)}
                />
              )
            })}
          </div>

          <div className={styles.controls}>
            <button type="button" className={styles.arrow} onClick={previousPhoto} aria-label="Foto anterior">
              &larr;
            </button>
            <button type="button" className={styles.viewAll}>Ver todo</button>
            <button type="button" className={styles.arrow} onClick={nextPhoto} aria-label="Siguiente foto">
              &rarr;
            </button>
          </div>
        </>
      )}
    </section>
  )
}
