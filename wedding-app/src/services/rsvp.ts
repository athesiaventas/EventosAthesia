import { signInAnonymously } from 'firebase/auth'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import type { RsvpSubmission } from '../types/wedding'
import { firebaseAuth, firestore } from './firebase'

export async function submitRsvp(submission: RsvpSubmission) {
  const authResult = firebaseAuth.currentUser
    ? { user: firebaseAuth.currentUser }
    : await signInAnonymously(firebaseAuth)

  return addDoc(collection(firestore, 'weddings', submission.weddingSlug, 'rsvps'), {
    ...submission,
    submittedBy: authResult.user.uid,
    createdAt: serverTimestamp(),
  })
}
