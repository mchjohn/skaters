import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import { DATA } from '../../utils/FAKE_DATA'

import { ISkater } from '../../interfaces/skater'
import { RouteProps } from '../../../@types/routes'

export function useProfile() {
  const route = useRoute<RouteProps>()
  const [skater, setSkater] = useState({} as ISkater)
  const [isFavorite, setIsFavorite] = useState(false)

  function handleToggleFavorite() {
    setIsFavorite(prev => !prev)
  }

  useEffect(() => {
    if (route.params?.userId) {
      setSkater(DATA[Number(route.params.userId)])
    }
  }, [])

  return { skater, isFavorite, handleToggleFavorite }
}
