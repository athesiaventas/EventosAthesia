import { useEffect, useState } from 'react'
import { subscribeToGuestPhotos } from '../services/guestPhotos'
import type { GuestPhoto } from '../types/wedding'

export function useGuestPhotos(weddingSlug: string) {
  const [photos, setPhotos] = useState<GuestPhoto[]>([])

  useEffect(() => subscribeToGuestPhotos(weddingSlug, setPhotos), [weddingSlug])

  const removeBrokenPhoto = (photoId: string) => {
    setPhotos((currentPhotos) => currentPhotos.filter((photo) => photo.id !== photoId))
  }

  return { photos, removeBrokenPhoto }
}
