import { useState } from 'react'
import { FlashList } from '@shopify/flash-list'

import { useAuth } from '../../contexts/AuthContext'

import * as S from './styles'
import { Header } from './Header'
import { useHome } from './useHome'
import { UserInfo } from './UserInfo'

import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'
import { Loading } from '../../components/Loading'
import { CardSkater } from '../../components/CardSkater'
import { ModalUserInfo } from '../../components/ModalUserInfo'
import { FormRegisterSkater } from '../FormRegisterSkater'
import { SuccessRegisterSkater } from '../SuccessRegisterSkater'

export function Home() {
  const [modalVisible, setModalVisible] = useState(false)

  const { user, isUserLoading } = useAuth()
  const {
    skaters,
    hasNextPage,
    isLoadingSkaters,
    isFetchingNextPage,
    fetchNextPage,
  } = useHome()

  function handleToggleModal() {
    setModalVisible(prev => !prev)
  }

  return (
    <>
      <S.View>
        <Header>
          <UserInfo
            name={user?.name}
            isLoading={isUserLoading}
            handleToggleModal={handleToggleModal}
          />
        </Header>

        <FlashList
          data={skaters?.pages?.flatMap((page) => page)}
          renderItem={({ item }) => <CardSkater data={item} isLoading={isLoadingSkaters} />}
          estimatedItemSize={114}
          ItemSeparatorComponent={() => <S.Separator />}
          ListHeaderComponentStyle={{ marginTop: 16 }}
          showsVerticalScrollIndicator={false}
          onEndReached={hasNextPage ? fetchNextPage : undefined}
          onEndReachedThreshold={0.1}
          ListFooterComponent={isFetchingNextPage ? <Loading self='center'  /> : null}
          ListEmptyComponent={<Loading self='center' />}
        />
      </S.View>

      {user &&
        <ModalUserInfo
          user={user}
          modalVisible={modalVisible}
          handleToggleModal={handleToggleModal}
        />
      }

      <SignIn />
      <SignUp />
      <FormRegisterSkater />
      <SuccessRegisterSkater />
    </>
  )
}
