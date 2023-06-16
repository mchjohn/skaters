import { useTheme } from 'styled-components'
import { Octicons } from '@expo/vector-icons'

import { RFValue } from '../../utils/responsive_fontsize'

import * as S from './styles'

import { Text } from '../Typography/styles'

type Props = {
  onPress(): void
}

export function ModalCloseButton({ onPress }: Props) {
  const { colors, radii } = useTheme()

  return (
    <S.Button
      android_ripple={{
        color: colors.yellow4,
        radius: radii.xl,
      }}
      onPress={onPress}
    >
      <Octicons name="chevron-left" size={RFValue(26)} color={colors.yellow4} />
      <Text size='sm' ml='sm'>Voltar</Text>
    </S.Button>
  )
}
