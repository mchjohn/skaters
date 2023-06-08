import { useQuery } from '@tanstack/react-query'
import { useRoute } from '@react-navigation/native'
import { useEffect, useMemo, useState } from 'react'

import * as LikesServices from '../../services/firebase/LikesServices'
import * as SkatersServices from '../../services/firebase/SkatersServices'

import { useAuth } from '../../contexts/AuthContext'
import { useModal } from '../../contexts/ModalContext'

import { QueryKeys } from '../../constants/QueryKeys'
import { RouteProps } from '../../../@types/routes'

export function useProfile() {
  const route = useRoute<RouteProps>()
  const [isFavorite, setIsFavorite] = useState(false)

  const { user, isUserLoading } = useAuth()
  const { handleToggleSignInModal } = useModal()

  const hasLiked = useMemo(() => {
    if (!user?.id || !route.params?.skaterId || !user?.skatersLikes) return false
    return user.skatersLikes.includes(route.params?.skaterId)
  }, [route.params?.skaterId, user?.id, user?.skatersLikes])

  function handleToggleFavorite() {
    const isFavorited = isFavorite ? false : true

    setIsFavorite(isFavorited)
  }

  function onPress() {
    if (user?.id) {
      if (route.params?.skaterId) {
        const value = isFavorite ? -1 : 1
        LikesServices.likeSkater(route.params.skaterId, user.id, value, handleToggleFavorite)
      }
    } else {
      handleToggleSignInModal()
    }
  }

  const { data: skater, isLoading } = useQuery(
    [QueryKeys.SKATER],
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => SkatersServices.getSkaterById(route.params!.skaterId),
  )

  useEffect(() => {
    setIsFavorite(hasLiked)
  }, [user?.id, route?.params?.skaterId, hasLiked, user])

  return {
    skater,
    isFavorite,
    isUserLoading,
    isSkaterLoading: isLoading,
    onPress,
    handleToggleFavorite,
  }
}
