import styled from 'styled-components/native'

import { RFValue } from '../../utils/responsive_fontsize'

export const Button = styled.Pressable`
  flexDirection: row

  alignSelf: flex-end
  alignItems: center
  justifyContent: center
`

export const Text = styled.Text`
  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => RFValue(props.theme.fontSize.sm)}px

  margin-left: ${props => props.theme.spacing.sm}px
`
