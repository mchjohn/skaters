import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { QueryKeys } from '../../constants/QueryKeys'

import { useDebounce } from '../../hooks/useDebounce'
import * as SkatersServices from '../../services/firebase/SkatersServices'

import { SelectedItemProps } from '../../components/Filter'


export function useHome() {
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearch = useDebounce((term: string) => {
    setSearchTerm(term)
  }, 500)

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
    SkatersServices.getSkaters(pageParam, selectedFilter, searchTerm),
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

  useEffect(() => { refetch({ queryKey: [QueryKeys.SKATERS, searchTerm] }) }, [searchTerm])

  return { skaters, hasNextPage, isLoadingSkaters, isFetchingNextPage, fetchNextPage, handleSelectFilter, debouncedSearch }
}
