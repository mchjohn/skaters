import { useTheme } from 'styled-components'
import { Ionicons } from '@expo/vector-icons'
import { ReactNode } from 'react'

import * as S from './styles'
import { useHome } from '../useHome'

import { RFValue } from '../../../utils/responsive_fontsize'

export function Header({ children }: { children: ReactNode}) {
  const { colors } = useTheme()

  const { handleOpenSignOrFormRegisterModal } = useHome()

  return (
    <S.View>
      {children}

      <Ionicons
        name="ios-add-circle"
        size={RFValue(40)}
        color={colors.yellow4}
        onPress={handleOpenSignOrFormRegisterModal}
      />
    </S.View>
  )
}
