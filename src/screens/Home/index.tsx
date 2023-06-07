import { useState } from 'react'
import { FlashList } from '@shopify/flash-list'

import { useAuth } from '../../contexts/AuthContext'

import * as S from './styles'
import { useHome } from './useHome'

import { Filter } from '../../components/Filter'
import { CardSkater } from '../../components/CardSkater'
import { ListFooter } from '../../components/ListFooter'
import { ModalUserInfo } from '../../components/ModalUserInfo'

export function Home() {
  const [modalVisible, setModalVisible] = useState(false)

  const { user, isLoading } = useAuth()
  const { skaters, hasNextPage, isLoadingSkaters, isFetchingNextPage, fetchNextPage, handleSelectFilter } = useHome()

  function handleToggleModal() {
    setModalVisible(prev => !prev)
  }

  return (
    <>
      <S.View>
        {user?.name &&
          <S.Text onPress={handleToggleModal}>Olá, {user.name} 🛹</S.Text>
        }

        <S.Header>
          <Filter onSelect={handleSelectFilter} />
        </S.Header>

        <FlashList
          data={skaters?.pages?.flatMap((page) => page)}
          renderItem={({ item }) => <CardSkater data={item} isLoading={isLoadingSkaters} />}
          estimatedItemSize={114}
          ItemSeparatorComponent={() => <S.Separator />}
          ListHeaderComponentStyle={{ marginTop: 16 }}
          showsVerticalScrollIndicator={false}
          onEndReached={hasNextPage ? fetchNextPage : undefined}
          onEndReachedThreshold={0.1}
          ListFooterComponent={isFetchingNextPage ? <ListFooter /> : null}
        />
      </S.View>

      {user &&
        <ModalUserInfo
          user={user}
          modalVisible={modalVisible}
          handleToggleModal={handleToggleModal}
        />
      }
    </>
  )
}
