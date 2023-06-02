import { FlashList } from '@shopify/flash-list'

import * as S from './styles'
import { useHome } from './useHome'

import { Filter } from '../../components/Filter'
import { CardSkater } from '../../components/CardSkater'
import { SearchButton } from '../../components/Search'

export function Home() {
  const { skaters, isLoadingSkaters } = useHome()

  return (
    <S.View>
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
  )
}
