import styled from 'styled-components/native'

export const Button = styled.Pressable`
  width: ${props => props.theme.size.md}px
  height: ${props => props.theme.size.md}px

  alignItems: center
  justifyContent: center
  overflow: hidden

  borderWidth: 2px
  borderColor: ${props => props.theme.colors.gray8}
  borderRadius: ${props => props.theme.radii.full}px
`

export const Text = styled.Text`
  color: ${props => props.theme.colors.gray1}
`
