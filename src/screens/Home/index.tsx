import { FlashList } from '@shopify/flash-list'
import { useNavigation } from '@react-navigation/native'

import { DATA } from '../../utils/FAKE_DATA'
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

      <FlashList
        data={DATA}
        renderItem={({ item }) => <CardSkater data={item} />}
        estimatedItemSize={114}
        ItemSeparatorComponent={() => <S.Separator />}
        ListHeaderComponentStyle={{ marginTop: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </S.View>
  )
}
