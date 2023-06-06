import { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'

import { QueryKeys } from '../../constants/QueryKeys'

import * as SkatersServices from '../../services/firebase/SkatersServices'

export function useHome() {
  const {
    data: skaters,
    isLoading: isLoadingSkaters,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery([QueryKeys.SKATERS], ({ pageParam }) => SkatersServices.getSkaters(pageParam), {
    getNextPageParam: (lastPage) => {
      const lastItem = lastPage[lastPage.length - 1]
      return lastItem?.id
    },
  })

  useEffect(() => {
    fetchNextPage()
  }, []) // eslint-disable-line

  return { skaters, hasNextPage, isLoadingSkaters, isFetchingNextPage, fetchNextPage }
}
