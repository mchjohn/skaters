import styled from 'styled-components/native'

export const ModalView = styled.View`
  flex: 1
  width: ${props => props.theme.size.full}

  align-items: center
  justify-content: center

  borderRadius: ${props => props.theme.radii.md}px
`

export const Info = styled.View`
  margin-vertical: ${props => props.theme.spacing.xl}px
`

export const Button = styled.Pressable`
  width: ${props => props.theme.size.full}

  margin-top: ${props => props.theme.spacing.md}px
  margin-bottom: ${props => props.theme.spacing.xl}px

  padding-vertical: ${props => props.theme.spacing.sm}px
  padding-horizontal: ${props => props.theme.spacing.sm}px

  alignItems: center
  justifyContent: center

  borderRadius: ${props => props.theme.radii.md}px
  background-color: ${props => props.theme.colors.yellow4}
`

export const Form = styled.ScrollView`
  width: ${props => props.theme.size.full}

  padding: ${props => props.theme.spacing.md}px
  background-color: ${props => props.theme.colors.gray8}
  borderRadius: ${props => props.theme.radii.md}px
`
