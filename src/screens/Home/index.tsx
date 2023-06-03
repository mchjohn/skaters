import { useState } from 'react'
import { FlashList } from '@shopify/flash-list'

import * as S from './styles'
import { useHome } from './useHome'

import { Filter } from '../../components/Filter'
import { CardSkater } from '../../components/CardSkater'
import { SearchButton } from '../../components/Search'
import { ModalUserInfo } from '../../components/ModalUserInfo'
import { useAuth } from '../../contexts/AuthContext'

export function Home() {
  const [modalVisible, setModalVisible] = useState(false)

  const { user } = useAuth()
  const { skaters, isLoadingSkaters } = useHome()

  function handleToggleModal() {
    setModalVisible(prev => !prev)
  }

  return (
    <>
      <S.View>
        <S.Text onPress={handleToggleModal}>Olá, John 🛹</S.Text>

        <S.Header>
          <Filter />

          <SearchButton />
        </S.Header>

        <FlashList
          data={skaters}
          renderItem={({ item }) => <CardSkater data={item} isLoading={isLoadingSkaters} />}
          estimatedItemSize={114}
          ItemSeparatorComponent={() => <S.Separator />}
          ListHeaderComponentStyle={{ marginTop: 16 }}
          showsVerticalScrollIndicator={false}
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
