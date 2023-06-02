import { useQuery } from '@tanstack/react-query'

import { QueryKeys } from '../../constants/QueryKeys'

import * as SkatersServices from '../../services/firebase/SkatersServices'

export function useHome() {
  const {
    data: skaters,
    isLoading: isLoadingSkaters
  } = useQuery([QueryKeys.SKATERS], () => SkatersServices.getSkaters())

  return { skaters, isLoadingSkaters }
}
