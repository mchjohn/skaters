import styled from 'styled-components/native'

export const ModalView = styled.View`
  flex: 1
  width: ${props => props.theme.size.full}

  borderRadius: ${props => props.theme.radii.md}px
`

export const Info = styled.View`
  margin-vertical: ${props => props.theme.spacing.xl}px
`

export const Button = styled.Pressable`
  padding: ${props => props.theme.spacing.sm}px
`
