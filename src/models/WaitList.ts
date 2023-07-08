import dayjs from 'dayjs'
import { addDoc, collection } from 'firebase/firestore'
import { z } from 'zod'

import { db } from '@/config/firebase'

export const WaitListSchema = z.object({
  email: z.string().email(),
  createdAt: z.date().optional(),
})

export type TWaitList = z.infer<typeof WaitListSchema>

export const addEmailToWaitList = async (email: TWaitList['email']): Promise<void> => {
  try {
    await addDoc(collection(db, 'wait-list'), {
      email,
      createdAt: dayjs().format(),
    })
  } catch (error) {
    console.error(error)
  }
}
