import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRoute } from '@react-navigation/native'

import * as SkatersServices from '../../services/firebase/SkatersServices'

import { RouteProps } from '../../../@types/routes'
import { QueryKeys } from '../../constants/QueryKeys'

export function useProfile() {
  const route = useRoute<RouteProps>()
  const [isFavorite, setIsFavorite] = useState(false)

  function handleToggleFavorite() {
    setIsFavorite(prev => !prev)
  }

  const { data: skater, isLoading: isLoadingSkater } = useQuery(
    [QueryKeys.SKATER],
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => SkatersServices.getSkaterById(route.params!.userId),
  )

  return { skater, isFavorite, isLoadingSkater, handleToggleFavorite }
}
