import styled from 'styled-components/native'

export const Button = styled.Pressable`
  position: absolute
  top: 0px
  right: 0px

  padding-top: ${props => props.theme.spacing.sm}px
  padding-right: ${props => props.theme.spacing.sm}px
`
