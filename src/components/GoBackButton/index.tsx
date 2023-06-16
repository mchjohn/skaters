import { useTheme } from 'styled-components'
import { Octicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { RFValue } from '../../utils/responsive_fontsize'
import { NavigationProps } from '../../../@types/routes'

import * as S from './styles'
import Theme from '../../styles/theme'
import { Text } from '../Typography/styles'

export function GoBackButton() {
  const { colors } = useTheme()
  const navigation = useNavigation<NavigationProps>()

  function handleGoBack() { navigation.goBack() }

  return (
    <S.Button
      android_ripple={{
        color: Theme.colors.yellow4,
        radius: Theme.radii.xl,
      }}
      onPress={handleGoBack}
    >
      <Octicons name="chevron-left" size={RFValue(26)} color={colors.yellow4} />
      <Text size='sm' ml='sm'>Voltar</Text>
    </S.Button>
  )
}
