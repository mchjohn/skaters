import { useState } from 'react'

import * as UsersServices from '../../services/firebase/UsersServices'
import { useModal } from '../../contexts/ModalContext'

export function useSignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { modalSignInIsVisible, handleToggleSignInModal, handleToggleSignUpModal } = useModal()

  const disableSignInButton = !email || password.length < 6

  function handleSignIn() {
    try {
      UsersServices.signIn(email, password, handleToggleSignInModal)
    } catch (error) { return }
  }

  function handleGoToSignUp() {
    handleToggleSignUpModal()
    handleToggleSignInModal()
  }

  return {
    formData: {
      email, setEmail,
      password, setPassword
    },
    disableSignInButton,
    modalSignInIsVisible,
    handleSignIn,
    handleGoToSignUp,
    handleToggleSignInModal,
  }
}
