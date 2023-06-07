import auth from '@react-native-firebase/auth'
import { useMutation } from '@tanstack/react-query'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { IUser } from '../interfaces/user'

import * as UsersServices from '../services/firebase/UsersServices'

type AuthProviderProps = {
  children: ReactNode;
};

interface AuthContextType {
  user: IUser | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null)

  const { mutate: getUserDataOnFirestore, isLoading } =
    useMutation((id: string) => UsersServices.getUserData(id),
      {
        onSuccess: (data) => {
          if (data) {
            setUser({
              ...user,
              ...data
            })
          }
        }
      }
    )

  function checkUserIsLoggedIn() {
    auth().onAuthStateChanged((_user) => {
      if (_user) {
        const userData = {
          id: _user.uid,
          name: _user?.displayName,
          email: _user?.email,
        }

        setUser(userData)
        getUserDataOnFirestore(_user.uid)
      } else {
        setUser(null)
      }
    })
  }

  useEffect(() => {
    const unsubscribe = checkUserIsLoggedIn()

    return unsubscribe
  }, []) // eslint-disable-line

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
