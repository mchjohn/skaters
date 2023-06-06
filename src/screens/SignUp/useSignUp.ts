import { useState } from 'react'

import * as UsersServices from '../../services/firebase/UsersServices'
import { useModal } from '../../contexts/ModalContext'

export function useSignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { modalSignUpIsVisible, handleToggleSignUpModal, handleToggleSignInModal } = useModal()

  const disableSignUpButton = !name || !email || password.length < 6

  function handleSignUp() {
    try {
      const userData = { name, email, password }
      UsersServices.signUp(userData, handleToggleSignUpModal)
    } catch (error) { return }
  }

  function handleGoToSignIn() {
    handleToggleSignUpModal()
    handleToggleSignInModal()
  }

  return {
    formData: {
      name, setName,
      email, setEmail,
      password, setPassword,
    },
    disableSignUpButton,
    modalSignUpIsVisible,
    handleSignUp,
    handleGoToSignIn,
    handleToggleSignUpModal
  }
}
