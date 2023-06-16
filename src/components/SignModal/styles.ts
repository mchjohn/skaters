import styled from 'styled-components/native'

export const ModalView = styled.View`
  flex: 1
  width: ${props => props.theme.size.full}

  align-items: center
  justify-content: center

  borderRadius: ${props => props.theme.radii.md}px
`

export const Button = styled.Pressable`
  width: ${props => props.theme.size.full}

  margin-top: ${props => props.theme.spacing.xl}px

  padding-vertical: ${props => props.theme.spacing.sm}px
  padding-horizontal: ${props => props.theme.spacing.sm}px

  alignItems: center
  justifyContent: center

  borderRadius: ${props => props.theme.radii.md}px
  background-color: ${props => props.theme.colors.yellow4}
`

export const Form = styled.View`
  width: ${props => props.theme.size.full}
  alignItems: center
  justifyContent: center

  padding: ${props => props.theme.spacing.md}px
  background-color: ${props => props.theme.colors.gray8}
  borderRadius: ${props => props.theme.radii.md}px
`

export const ButtonOutline = styled.Pressable`
  width: ${props => props.theme.size.full}

  margin-top: ${props => props.theme.spacing.xl}px

  padding-vertical: ${props => props.theme.spacing.sm}px
  padding-horizontal: ${props => props.theme.spacing.sm}px

  alignItems: center
  justifyContent: center

  borderWidth: 0.5px
  borderColor: ${props => props.theme.colors.gray1}
  borderRadius: ${props => props.theme.radii.md}px
`

export const Info = styled.View`
  margin-vertical: ${props => props.theme.spacing.xl}px
`
