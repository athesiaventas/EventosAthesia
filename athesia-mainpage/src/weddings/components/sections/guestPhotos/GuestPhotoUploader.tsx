import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { uploadGuestPhoto } from '../../../services/guestPhotos'
import type { WeddingInfo } from '../../../types/wedding'
import styles from './GuestPhotoUploader.module.css'

type GuestPhotoUploaderProps = {
  wedding: WeddingInfo
}

const validImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg']

export function GuestPhotoUploader({ wedding }: GuestPhotoUploaderProps) {
  const [uploadCode, setUploadCode] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [status, setStatus] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const config = wedding.guestPhotos

  const uploadWindow = useMemo(() => {
    if (!config) {
      return { isOpen: false, message: 'La subida de fotos no esta configurada.' }
    }

    const now = new Date()
    const startsAt = new Date(config.uploadStartsAt)
    const endsAt = new Date(config.uploadEndsAt)

    if (now < startsAt) {
      return { isOpen: false, message: `Podras subir fotos a partir de ${startsAt.toLocaleString()}.` }
    }

    if (now > endsAt) {
      return { isOpen: false, message: 'La ventana para subir fotos ya finalizo.' }
    }

    return { isOpen: true, message: '' }
  }, [config])

  if (!config) {
    return null
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setStatus('')

    if (!file) {
      setSelectedFile(null)
      return
    }

    if (!validImageTypes.includes(file.type)) {
      setSelectedFile(null)
      setStatus('Selecciona una imagen JPG, PNG o WebP.')
      return
    }

    if (file.size > config.maxFileSizeMb * 1024 * 1024) {
      setSelectedFile(null)
      setStatus(`La imagen debe pesar menos de ${config.maxFileSizeMb} MB.`)
      return
    }

    setSelectedFile(file)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!uploadWindow.isOpen) {
      setStatus(uploadWindow.message)
      return
    }

    if (uploadCode.trim() !== config.uploadCode) {
      setStatus('El codigo no es correcto.')
      return
    }

    if (!selectedFile) {
      setStatus('Selecciona una foto para subir.')
      return
    }

    try {
      setIsUploading(true)
      setStatus('Subiendo foto...')
      await uploadGuestPhoto({
        weddingSlug: wedding.slug,
        file: selectedFile,
        uploadCode: uploadCode.trim(),
      })
      setSelectedFile(null)
      setStatus('Foto subida correctamente.')
      form.reset()
    } catch (error) {
      console.error(error)
      setStatus('No se pudo subir la foto. Revisa Firebase y vuelve a intentar.')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className={styles.uploader}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <span>Codigo de subida</span>
          <input
            type="text"
            value={uploadCode}
            onChange={(event) => setUploadCode(event.target.value)}
            placeholder="Codigo del evento"
            disabled={!uploadWindow.isOpen || isUploading}
          />
        </label>

        <label>
          <span>Foto</span>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileChange}
            disabled={!uploadWindow.isOpen || isUploading}
          />
        </label>

        <button type="submit" disabled={!uploadWindow.isOpen || isUploading}>
          {isUploading ? 'Subiendo...' : 'Subir foto'}
        </button>
      </form>

      {(status || uploadWindow.message) && <p className={styles.status}>{status || uploadWindow.message}</p>}
    </div>
  )
}
