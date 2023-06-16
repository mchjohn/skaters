import styled from 'styled-components/native'

export const Modal = styled.Modal.attrs({
  animationType: 'slide',
  transparent: true
})``

export const CenteredView = styled.View`
  flex: 1
  padding-bottom: ${props => props.theme.spacing.md}px
  padding-horizontal: ${props => props.theme.spacing.md}px
  align-items: center

  borderRadius: ${props => props.theme.radii.md}px
  backgroundColor: ${props => props.theme.colors.gray9}
`

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
