import { useNavigation } from '@react-navigation/native'

import { NavigationProps } from '../../../@types/routes'

import * as S from './styles'

import { Filter } from '../../components/Filter'
import { CardSkater } from '../../components/CardSkater'
import { SearchButton } from '../../components/Search'

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

      <CardSkater />
    </S.View>
  )
}
