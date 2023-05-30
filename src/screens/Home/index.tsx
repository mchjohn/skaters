import { useNavigation } from '@react-navigation/native'

import { NavigationProps } from '../../../@types/routes'

import * as S from './styles'

import { SearchButton } from '../../components/Search'
import { Filter } from '../../components/Filter'

export function Home() {
  const navigation = useNavigation<NavigationProps>()

  function handleGoToProfile() {
    navigation.navigate('Profile', { userId: '123' })
  }

  return (
    <S.View>
      <S.Header>
        <Filter />
        <SearchButton />
      </S.Header>
    </S.View>
  )
}
