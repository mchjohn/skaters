import { useTheme } from 'styled-components'
import { ActivityIndicator } from 'react-native'

import * as S from './styles'

export function ListFooter() {
  const { colors } = useTheme()

  return (
    <S.View>
      <ActivityIndicator size='small' color={colors.yellow4} />
    </S.View>
  )
}
