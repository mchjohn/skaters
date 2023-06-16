import styled from 'styled-components/native'

export const View = styled.View`
  flex: 1

  background-color: ${props => props.theme.colors.gray9}

  padding-bottom: ${props => props.theme.spacing.sm}px
  padding-horizontal: ${props => props.theme.spacing.sm}px
`

export const Card = styled.View`
  flex: 1

  padding: ${props => props.theme.spacing.sm}px
  margin-top: ${props => props.theme.spacing.sm}px

  borderRadius: ${props => props.theme.radii.md}px
  background-color: ${props => props.theme.colors.gray8}
`

export const WrapperAvatar = styled.View`
  height: 40%
`

export const Avatar = styled.Image`
  width: ${props => props.theme.size.full}
  height: ${props => props.theme.size.full}
  borderRadius: ${props => props.theme.radii.md}px
`

export const LoadingAvatar = styled.View`
  width: ${props => props.theme.size.full}
  height: ${props => props.theme.size.full}
  alignItems: center
  justifyContent: center
  borderRadius: ${props => props.theme.radii.md}px
`

export const WrapperText = styled.View``

export const Wrapper = styled.View`
  flex: 1
`

export const InlineView = styled.View`
  flexDirection: row
  alignItems: center
  justifyContent: space-between

  margin-bottom: ${props => props.theme.spacing.md}px
  padding-horizontal: ${props => props.theme.spacing.xs}px
`

export const Footer = styled.Pressable`
  gap: 1px
  flexWrap: wrap
  flexDirection: row
`

export const ListInfo = styled.ScrollView.attrs({
  horizontal: true,
})`
  maxHeight: ${props => props.theme.size.md}px
  margin-bottom: ${props => props.theme.spacing.md}px
`

export const CardInfo = styled.View`
  alignItems: center
  justifyContent: center

  margin-right: ${props => props.theme.spacing.sm}px
  padding-vertical: ${props => props.theme.spacing.md}px
  padding-horizontal: 12px

  border-radius: ${props => props.theme.spacing.sm}px

  background-color: ${props => props.theme.colors.gray9}
`

export const ListSponsors = styled.ScrollView.attrs({
  horizontal: true
})`
  maxHeight: 110px
`

export const CardSponsor = styled.View`
  alignItems: center
  justifyContent: center

  margin-top: ${props => props.theme.spacing.sm}px
  margin-right: ${props => props.theme.spacing.xs}px
  padding-vertical: ${props => props.theme.spacing.sm}px
  padding-horizontal: 12px

  border-radius: ${props => props.theme.spacing.sm}px

  background-color: ${props => props.theme.colors.gray9}
`
