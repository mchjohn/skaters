import { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'

import { QueryKeys } from '../../constants/QueryKeys'

import { useAuth } from '../../contexts/AuthContext'
import { useModal } from '../../contexts/ModalContext'
import * as SkatersServices from '../../services/firebase/SkatersServices'

export function useHome() {
  const {
    data: skaters,
    isLoading: isLoadingSkaters,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery([QueryKeys.SKATERS], ({ pageParam }) =>
    SkatersServices.getSkaters(pageParam),
  {
    getNextPageParam: (lastPage) => {
      const lastItem = lastPage[lastPage.length - 1]
      return lastItem?.id
    },
  }
  )

  const { user } = useAuth()
  const { handleToggleSignInModal, handleToggleFormRegisterSkaterModal } = useModal()

  function handleOpenSignOrFormRegisterModal() {
    if (user?.id) {
      // TODO: lógica para abrir o modal de envio de atualização para o skatista em questão
      handleToggleFormRegisterSkaterModal()
    } else {
      handleToggleSignInModal()
    }
  }

  useEffect(() => {
    fetchNextPage()
  }, []) // eslint-disable-line

  return {
    skaters,
    hasNextPage,
    isLoadingSkaters,
    isFetchingNextPage,
    fetchNextPage,
    handleOpenSignOrFormRegisterModal
  }
}
