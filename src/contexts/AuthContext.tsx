import auth from '@react-native-firebase/auth'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { IUser } from '../interfaces/user'

type AuthProviderProps = {
  children: ReactNode;
};

interface AuthContextType {
  user: IUser | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState(false)

  function checkUserIsLoggedIn() {
    setLoading(true)

    auth().onAuthStateChanged((_user) => {
      if (_user) {
        const userData = {
          id: _user.uid,
          name: _user?.displayName,
          email: _user?.email,
        }

        setUser(userData)
      } else {
        setUser(null)
      }
    })

    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = checkUserIsLoggedIn()

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
