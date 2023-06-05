import { useTheme } from 'styled-components'
import { Octicons } from '@expo/vector-icons'

import { RFValue } from '../../utils/responsive_fontsize'

import * as S from './styles'
import Theme from '../../styles/theme'

type Props = {
  onPress(): void
}

export function ModalCloseButton({ onPress }: Props) {
  const { colors } = useTheme()

  return (
    <S.Button
      android_ripple={{
        color: Theme.colors.yellow4,
        radius: Theme.radii.xl,
      }}
      onPress={onPress}
    >
      <Octicons name="chevron-left" size={RFValue(26)} color={colors.yellow4} />
      <S.Text>Voltar</S.Text>
    </S.Button>
  )
}
