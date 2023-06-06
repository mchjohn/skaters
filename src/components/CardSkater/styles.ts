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
  width: ${props => props.theme.size.lg}px
  height: ${props => props.theme.size.lg}px
  borderRadius: ${props => props.theme.radii.full}px
`

export const Title = styled.Text`
  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => props.theme.fontSize.lg}px
  fontWeight: 700
`

export const Text = styled.Text`
  margin-top: ${props => props.theme.spacing.xs}px
  margin-bottom: ${props => props.theme.spacing.xs}px

  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => props.theme.fontSize.md}px
  fontWeight: 400
`

export const Link = styled.Text`
  color: ${props => props.theme.colors.yellow4}
  fontSize: ${props => props.theme.fontSize.xs}px
  fontWeight: 400
`
