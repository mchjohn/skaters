import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRoute } from '@react-navigation/native'

import * as SkatersServices from '../../services/firebase/SkatersServices'
import { useAuth } from '../../contexts/AuthContext'
import { useModal } from '../../contexts/ModalContext'

import { QueryKeys } from '../../constants/QueryKeys'
import { RouteProps } from '../../../@types/routes'

export function useProfile() {
  const route = useRoute<RouteProps>()
  const [isFavorite, setIsFavorite] = useState(false)

  const { user } = useAuth()
  const { handleToggleSignInModal } = useModal()

  function handleToggleFavorite() {
    const isFavorited = isFavorite ? false : true

    setIsFavorite(isFavorited)
  }

  function onPress() {
    if (user?.id) {
      handleToggleFavorite()
    } else {
      handleToggleSignInModal()
    }
  }

  const { data: skater, isLoading: isLoadingSkater } = useQuery(
    [QueryKeys.SKATER],
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => SkatersServices.getSkaterById(route.params!.userId),
  )

  return {
    skater,
    isFavorite,
    isLoadingSkater,
    onPress,
    handleToggleFavorite,
  }
}
