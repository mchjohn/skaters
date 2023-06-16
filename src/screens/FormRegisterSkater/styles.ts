import styled from 'styled-components/native'
import { MaskedTextInput } from 'react-native-mask-text'

import theme from '../../styles/theme'

export const ModalView = styled.View`
  flex: 1
  width: ${props => props.theme.size.full}

  align-items: center
  justify-content: center

  borderRadius: ${props => props.theme.radii.md}px
`

export const Header = styled.View`
  width: ${props => props.theme.size.full}
  margin-bottom: ${props => props.theme.spacing.md}px

  flexDirection: row
  justify-content: space-between
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
  padding-horizontal: ${props => props.theme.spacing.md}px

  borderRadius: ${props => props.theme.radii.md}px
  background-color: ${props => props.theme.colors.gray8}
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.gray2
})`
  width: ${props => props.theme.size.full}
  height: 52px
  margin-top: ${props => props.theme.spacing.md}px
  padding-left: ${props => props.theme.spacing.md}px

  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => props.theme.fontSize.md}px

  borderRadius: ${props => props.theme.radii.md}px
  background-color: ${props => props.theme.colors.gray9}
`

export const MaskedInput = styled(MaskedTextInput).attrs({
  placeholderTextColor: theme.colors.gray2
})`
  width: ${props => props.theme.size.full}
  height: 52px
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
