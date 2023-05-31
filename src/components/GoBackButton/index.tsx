import { useTheme } from 'styled-components'
import { Octicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { NavigationProps } from '../../../@types/routes'

import * as S from './styles'
import Theme from '../../styles/theme'

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
      <Octicons name="chevron-left" size={26} color={colors.yellow4} />
      <S.Text>Voltar</S.Text>
    </S.Button>
  )
}
