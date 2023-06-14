import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import * as SkatersServices from '../../services/firebase/SkatersServices'
import { useModal } from '../../contexts/ModalContext'
import { useAuth } from '../../contexts/AuthContext'

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

  const { user } = useAuth()
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

    handleToggleFormRegisterSkaterModal()

    handleToggleRegisterSkaterSuccessModal()
  }

  const {
    mutate: handleUpdateSkater,
    isLoading
  } = useMutation(() => SkatersServices.registerSkater(
    user?.id as string,
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
      creator: {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id: user!.id as string,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        name: user!.name as string,
      }
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
