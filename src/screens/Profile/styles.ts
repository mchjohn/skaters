import styled from 'styled-components/native'

export const View = styled.View`
  flex: 1
  padding: ${props => props.theme.spacing.md}px
  background-color: ${props => props.theme.colors.gray9}
`

export const Card = styled.View`
  flex: 1
  padding: ${props => props.theme.spacing.md}px
  margin-top: ${props => props.theme.spacing.md}px
  borderRadius: ${props => props.theme.radii.md}px
  background-color: ${props => props.theme.colors.gray8}
`
export const WrapperAvatar = styled.View`
  height: 50%
`

export const Avatar = styled.Image`
  width: ${props => props.theme.size.full}
  height: ${props => props.theme.size.full}
  borderRadius: ${props => props.theme.radii.md}px
`

export const WrapperInfo = styled.View`
  flex: 1
  margin-top: ${props => props.theme.spacing.md}px
  margin-bottom: ${props => props.theme.spacing.md}px
`

export const Title = styled.Text`
  margin-top: ${props => props.theme.spacing.md}px

  color: ${props => props.theme.colors.yellow4}
  fontSize: ${props => props.theme.fontSize['2xl']}px
  fontWeight: 700
`

export const Label = styled.Text`
  margin-top: ${props => props.theme.spacing.xs}px
  margin-bottom: ${props => props.theme.spacing.xs}px

  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => props.theme.fontSize.lg}px
`

export const TextBold = styled(Label)`
  fontWeight: 700
`

export const Link = styled.Text`
  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => props.theme.fontSize.sm}px
`
