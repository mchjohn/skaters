import { useTheme } from 'styled-components'
import { Octicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { RFValue } from '../../utils/responsive_fontsize'
import { NavigationProps } from '../../../@types/routes'

import * as S from './styles'
import { Text } from '../Typography/styles'

type Props = {
  onPress?: () => void
}

export function GoBackButton({ onPress }: Props) {
  const { colors, radii } = useTheme()
  const navigation = useNavigation<NavigationProps>()

  function handlePress() {
    if(onPress) {
      onPress()
    } else {
      navigation.goBack()
    }
  }

  return (
    <S.Button
      android_ripple={{
        color: colors.yellow4,
        radius: radii.xl,
      }}
      onPress={handlePress}
    >
      <Octicons name="chevron-left" size={RFValue(26)} color={colors.yellow4} />
      <Text size='sm' ml='sm'>Voltar</Text>
    </S.Button>
  )
}
