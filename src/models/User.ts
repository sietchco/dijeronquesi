import { UserCredential } from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

import { db } from '@/config/firebase'

export type User = {
  uid: string
  photoURL: string
  displayName: string
  email: string
  emailVerified: boolean
  phoneNumber: string
  coupleId?: string
}

export type { UserCredential }

export const findUserById = async (userId: string): Promise<User | undefined> => {
  try {
    const userRef = doc(db, 'users', userId)
    const docSnap = await getDoc(userRef)

    return docSnap.data() as User
  } catch (error) {
    console.error(error)
  }
}
