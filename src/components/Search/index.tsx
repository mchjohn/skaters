import { useTheme } from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

import * as S from './styles'
import Theme from '../../styles/theme'

export function SearchButton() {
  const { colors } = useTheme()

  return (
    <S.Button
      android_ripple={{
        color: Theme.colors.yellow4,
        radius: Theme.radii.xl,
        borderless: true,
      }}
    >
      <Ionicons name="search" size={32} color={colors.yellow4} />
    </S.Button>
  )
}
