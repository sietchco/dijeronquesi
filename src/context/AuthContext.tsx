import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import app from '@/config/firebase'
import { findUserById, User, UserCredential } from '@/models/User'

const auth = getAuth(app)

type Context = { user: User | null }

const AuthContext = createContext<Context>({} as Context)

export const AuthContextProvider = (props: PropsWithChildren) => {
  const { children } = props
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const onStateChange = async (user: UserCredential['user'] | null) => {
    if (user) {
      const savedUser = await findUserById(user.uid)
      setUser(savedUser as User)
    } else {
      setUser(null)
    }
    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      onStateChange(user)
    })

    return () => unsubscribe()
  }, [])

  const value = useMemo(() => ({ user }), [user])

  return (
    <AuthContext.Provider value={value}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
