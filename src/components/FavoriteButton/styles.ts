import styled from 'styled-components/native'

import { RFValue } from '../../utils/responsive_fontsize'

export const Button = styled.Pressable`
  position: absolute
  top: 0px
  right: 0px
  margin-top: ${props => props.theme.spacing.xs}px
  margin-right: ${props => props.theme.spacing.xs}px

  width: ${props => RFValue(props.theme.size.md)}px
  height: ${props => RFValue(props.theme.size.md)}px

  alignItems: center
  justifyContent: center

  borderRadius: ${props => props.theme.radii.full}px
  background-color: ${props => props.theme.colors.gray9}
`
