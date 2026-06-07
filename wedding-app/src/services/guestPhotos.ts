import { signInAnonymously } from 'firebase/auth'
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { firebaseAuth, firebaseStorage, firestore } from './firebase'
import type { GuestPhoto } from '../types/wedding'

const guestPhotosCollection = collection(firestore, 'guestPhotos')

function createPhotoId() {
  if ('crypto' in window && 'randomUUID' in window.crypto) {
    return window.crypto.randomUUID()
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function mapGuestPhoto(document: QueryDocumentSnapshot): GuestPhoto {
  const data = document.data()
  const createdAt = data.createdAt?.toDate?.()

  return {
    id: document.id,
    imageUrl: data.imageUrl,
    storagePath: data.storagePath,
    weddingSlug: data.weddingSlug,
    createdAt,
  }
}

export function subscribeToGuestPhotos(weddingSlug: string, onPhotosChange: (photos: GuestPhoto[]) => void) {
  const photosQuery = query(
    guestPhotosCollection,
    where('weddingSlug', '==', weddingSlug),
    where('approved', '==', true),
    orderBy('createdAt', 'desc'),
    limit(60),
  )

  return onSnapshot(photosQuery, (snapshot) => {
    onPhotosChange(snapshot.docs.map(mapGuestPhoto))
  })
}

export async function uploadGuestPhoto(params: {
  weddingSlug: string
  file: File
  uploadCode: string
}) {
  const userCredential = firebaseAuth.currentUser
    ? { user: firebaseAuth.currentUser }
    : await signInAnonymously(firebaseAuth)
  const photoId = createPhotoId()
  const extension = params.file.type.split('/')[1] || 'jpg'
  const storagePath = `weddings/${params.weddingSlug}/guest-photos/${photoId}.${extension}`
  const photoRef = ref(firebaseStorage, storagePath)

  await uploadBytes(photoRef, params.file, {
    contentType: params.file.type,
    customMetadata: {
      uploadCode: params.uploadCode,
      weddingSlug: params.weddingSlug,
      uploadedBy: userCredential.user.uid,
    },
  })

  const imageUrl = await getDownloadURL(photoRef)

  await addDoc(guestPhotosCollection, {
    weddingSlug: params.weddingSlug,
    imageUrl,
    storagePath,
    uploadedBy: userCredential.user.uid,
    approved: true,
    createdAt: serverTimestamp(),
  })

  return imageUrl
}
