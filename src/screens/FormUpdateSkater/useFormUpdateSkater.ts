import { useState } from 'react'

import * as UsersServices from '../../services/firebase/UsersServices'
import { useModal } from '../../contexts/ModalContext'

export function useFormUpdateSkater() {
  const [name, setName] = useState('')

  const { modalFormUpdateSkaterIsVisible, handleToggleFormUpdateSkaterModal } = useModal()

  // Fazer a lógica para desabilitar o botão de enviar alterações
  const disableUpdateSkaterButton = !name

  function handleUpdateSkater() {
    try {
      const userData = { name }
      // lógica para chamar a FN que faz o update do skatista
    } catch (error) { return }
  }

  return {
    formData: {
      name, setName,
    },
    disableUpdateSkaterButton,
    modalFormUpdateSkaterIsVisible,
    handleUpdateSkater,
    handleToggleFormUpdateSkaterModal
  }
}
