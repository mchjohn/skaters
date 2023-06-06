import { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'

import { QueryKeys } from '../../constants/QueryKeys'

import { SelectedItemProps } from '../../components/Filter'

import * as SkatersServices from '../../services/firebase/SkatersServices'

export function useHome() {
  let selectedFilter: SelectedItemProps = 'name'

  function handleSelectFilter(filter: SelectedItemProps) {
    selectedFilter = filter
    refetch()
  }

  const {
    data: skaters,
    isLoading: isLoadingSkaters,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
  } = useInfiniteQuery([QueryKeys.SKATERS], ({ pageParam }) =>
    SkatersServices.getSkaters(pageParam, selectedFilter),
  {
    getNextPageParam: (lastPage) => {
      const lastItem = lastPage[lastPage.length - 1]
      return lastItem?.id
    },
  }
  )

  useEffect(() => {
    fetchNextPage()
  }, []) // eslint-disable-line

  return { skaters, hasNextPage, isLoadingSkaters, isFetchingNextPage, fetchNextPage, handleSelectFilter }
}
