import styled from 'styled-components/native'

export const WrapperButton = styled.View`
  borderRadius: ${props => props.theme.radii.md}px
  backgroundColor: ${props => props.theme.colors.gray8}
`

export const Button = styled.Pressable`
  width: ${props => props.theme.size.full}
  padding: ${props => props.theme.spacing.sm}px

  flexDirection: row
  alignItems: center

  overflow: hidden

  borderRadius: ${props => props.theme.radii.md}px
`

export const Info = styled.View`
  margin-left: ${props => props.theme.spacing.sm}px
`

export const WrapperLoading = styled.View`
  width: ${props => props.theme.size.lg}px
  height: ${props => props.theme.size.lg}px

  alignItems: center
  justifyContent: center
`

export const Avatar = styled.Image`
  width: ${props => props.theme.size.md}px
  height: ${props => props.theme.size.md}px
  borderRadius: ${props => props.theme.radii.full}px
`
