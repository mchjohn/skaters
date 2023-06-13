import { useState } from 'react'

import * as UsersServices from '../../services/firebase/UsersServices'
import { useModal } from '../../contexts/ModalContext'

export function useFormUpdateSkater() {
  const [age, setAge] = useState('')
  const [name, setName] = useState('')
  const [state, setState] = useState('')
  const [level, setLevel] = useState('')
  const [stance, setStance] = useState('')
  const [sponsors, setSponsors] = useState('')
  const [instagram, setInstagram] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')

  const { modalFormUpdateSkaterIsVisible, handleToggleFormUpdateSkaterModal } = useModal()

  // TODO: Fazer a lógica para desabilitar o botão de enviar alterações
  const disableUpdateSkaterButton = !name

  function handleUpdateSkater() {
    try {
      const skaterData = {
        age,
        name,
        state,
        level,
        stance,
        sponsors,
        instagram,
        updatedAt
      }
      // TODO: lógica para chamar a FN que faz o update do skatista
    } catch (error) { return }
  }

  return {
    formData: {
      age, setAge,
      name, setName,
      state, setState,
      level, setLevel,
      stance, setStance,
      sponsors, setSponsors,
      instagram, setInstagram,
      updatedAt, setUpdatedAt,
    },
    disableUpdateSkaterButton,
    modalFormUpdateSkaterIsVisible,
    handleUpdateSkater,
    handleToggleFormUpdateSkaterModal
  }
}
