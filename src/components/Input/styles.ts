import styled from 'styled-components/native'

import theme from '../../styles/theme'

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.gray2,
})`
  width: ${props => props.theme.size.full}
  height: 48px
  margin-top: ${props => props.theme.spacing.sm}px
  padding-left: ${props => props.theme.spacing.md}px

  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => props.theme.fontSize.md}px

  borderRadius: ${props => props.theme.radii.md}px
  background-color: ${props => props.theme.colors.gray9}
`
