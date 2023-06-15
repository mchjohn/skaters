import { useTheme } from 'styled-components'
import { Ionicons } from '@expo/vector-icons'
import { ReactNode } from 'react'

import * as S from './styles'

import { useHome } from '../useHome'

import { RFValue } from '../../../utils/responsive_fontsize'

export function Header({ children }: { children: ReactNode}) {
  const { colors } = useTheme()

  const { alignEnd, handleOpenSignOrFormRegisterModal } = useHome()

  return (
    <S.View alignEnd={alignEnd}>
      {children}

      <Ionicons
        name="ios-add-circle"
        size={RFValue(32)}
        color={colors.yellow4}
        onPress={handleOpenSignOrFormRegisterModal}
      />
    </S.View>
  )
}
