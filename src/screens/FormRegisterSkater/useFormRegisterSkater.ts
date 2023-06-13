import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import * as SkatersServices from '../../services/firebase/SkatersServices'
import { useModal } from '../../contexts/ModalContext'

export function useFormRegisterSkater() {
  const [uf, setUf] = useState('')
  const [age, setAge] = useState('')
  const [name, setName] = useState('')
  const [state, setState] = useState('')
  const [level, setLevel] = useState('')
  const [stance, setStance] = useState('')
  const [country, setCountry] = useState('')
  const [sponsors, setSponsors] = useState('')
  const [instagram, setInstagram] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')

  const {
    modalFormRegisterSkaterIsVisible,
    handleToggleFormRegisterSkaterModal,
    handleToggleRegisterSkaterSuccessModal
  } = useModal()

  const disableUpdateSkaterButton =
    !uf ||
    !age ||
    !name ||
    !state ||
    !level ||
    !stance ||
    !country ||
    !sponsors ||
    !instagram ||
    !updatedAt

  function resetForm() {
    setUf('')
    setAge('')
    setName('')
    setState('')
    setLevel('')
    setStance('')
    setCountry('')
    setSponsors('')
    setInstagram('')
    setUpdatedAt('')

    handleToggleRegisterSkaterSuccessModal()

    handleToggleFormRegisterSkaterModal()
  }

  const {
    mutate: handleUpdateSkater,
    isLoading
  } = useMutation(() => SkatersServices.registerSkater(
    {
      uf,
      age,
      name,
      state,
      level,
      stance,
      country,
      sponsors,
      instagram,
      updatedAt,
    }
  ), { onSuccess: resetForm })

  return {
    isLoading,
    formData: {
      uf, setUf,
      age, setAge,
      name, setName,
      state, setState,
      level, setLevel,
      stance, setStance,
      country, setCountry,
      sponsors, setSponsors,
      instagram, setInstagram,
      updatedAt, setUpdatedAt,
    },
    disableUpdateSkaterButton,
    modalFormRegisterSkaterIsVisible,
    handleUpdateSkater,
    handleToggleFormRegisterSkaterModal
  }
}
