import { useEffect, useState } from 'react'
import { useGuestPhotos } from '../../../hooks/useGuestPhotos'
import type { WeddingInfo } from '../../../types/wedding'
import { GuestPhotoUploader } from './GuestPhotoUploader'
import styles from './GuestPhotosOverlay.module.css'

type GuestPhotosOverlayProps = {
  wedding: WeddingInfo
}

export function GuestPhotosOverlay({ wedding }: GuestPhotosOverlayProps) {
  const [activePhoto, setActivePhoto] = useState(0)
  const config = wedding.guestPhotos
  const { photos, removeBrokenPhoto } = useGuestPhotos(wedding.slug)
  const mainPhoto = photos[activePhoto]
  const previewPhoto = photos.length > 1 ? photos[(activePhoto + 1) % photos.length] : null

  useEffect(() => {
    if (activePhoto >= photos.length) {
      setActivePhoto(0)
    }
  }, [activePhoto, photos.length])

  if (!config) {
    return null
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
        <h2>{config.title}</h2>
        <p>{config.description}</p>
      </div>

      <GuestPhotoUploader wedding={wedding} />

      {mainPhoto && (
        <>
          <div className={styles.frame}>
            <img
              className={styles.main}
              src={mainPhoto.imageUrl}
              alt="Foto subida por invitado"
              onError={() => removeBrokenPhoto(mainPhoto.id)}
            />
            {previewPhoto && (
              <img
                className={styles.preview}
                src={previewPhoto.imageUrl}
                alt=""
                aria-hidden="true"
                onError={() => removeBrokenPhoto(previewPhoto.id)}
              />
            )}
          </div>

          <div className={styles.controls}>
            <button type="button" onClick={previousPhoto} aria-label="Foto anterior">&larr;</button>
            <button type="button">Ver todo</button>
            <button type="button" onClick={nextPhoto} aria-label="Siguiente foto">&rarr;</button>
          </div>
        </>
      )}
    </section>
  )
}
