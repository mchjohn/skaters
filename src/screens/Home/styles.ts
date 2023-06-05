import styled from 'styled-components/native'

import { RFValue } from '../../utils/responsive_fontsize'

export const View = styled.View`
  flex: 1
  padding: ${props => props.theme.spacing.md}px
  background-color: ${props => props.theme.colors.gray9}
`

export const Separator = styled.View`
  height: 8px
`

export const Header = styled.View`
  width: 100%
  align-items: center
  flex-direction: row
  justify-content: space-between
`

export const Text = styled.Text`
  margin-top: ${props => props.theme.spacing.xs}px
  margin-bottom: ${props => props.theme.spacing.sm}px

  color: ${props => props.theme.colors.yellow4}
  font-size: ${props => RFValue(props.theme.fontSize.lg)}px
`
