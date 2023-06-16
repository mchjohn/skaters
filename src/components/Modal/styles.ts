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
