import styled from 'styled-components/native'
import { MaskedTextInput } from 'react-native-mask-text'

import theme from '../../styles/theme'

export const ModalView = styled.ScrollView`
  width: ${props => props.theme.size.full}
`

export const Header = styled.View`
  width: ${props => props.theme.size.full}
  margin-top: ${props => props.theme.spacing.md}px
  margin-bottom: ${props => props.theme.spacing.xl}px

  flexDirection: row
  justify-content: space-between
`

export const Button = styled.Pressable`
  width: ${props => props.theme.size.full}

  margin-vertical: ${props => props.theme.spacing.md}px

  padding-vertical: ${props => props.theme.spacing.sm}px
  padding-horizontal: ${props => props.theme.spacing.sm}px

  alignItems: center
  justifyContent: center

  borderRadius: ${props => props.theme.radii.md}px
  background-color: ${props => props.theme.colors.yellow4}
`

export const Form = styled.View`
  width: ${props => props.theme.size.full}
  padding-horizontal: ${props => props.theme.spacing.md}px

  borderRadius: ${props => props.theme.radii.md}px
  background-color: ${props => props.theme.colors.gray8}
`

export const MaskedInput = styled(MaskedTextInput).attrs({
  placeholderTextColor: theme.colors.gray2
})`
  width: ${props => props.theme.size.full}
  height: 48px
  margin-top: ${props => props.theme.spacing.md}px
  padding-left: ${props => props.theme.spacing.md}px

  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => props.theme.fontSize.md}px

  borderRadius: ${props => props.theme.radii.md}px
  background-color: ${props => props.theme.colors.gray9}
`

export const WrapperSelect = styled.View`
  width: ${props => props.theme.size.full}

  flexDirection: row
  gap: ${props => props.theme.spacing.sm}px
`
