import styled from 'styled-components/native'

import { RFValue } from '../../utils/responsive_fontsize'

export const Modal = styled.Modal.attrs({
  animationType: 'slide',
  transparent: true
})``

export const CenteredView = styled.View`
  flex: 1
  padding: ${props => props.theme.spacing.md}px
  align-items: center

  borderRadius: ${props => props.theme.radii.md}px
  backgroundColor: ${props => props.theme.colors.gray9}
`

export const ModalView = styled.View`
  flex: 1
  width: ${props => props.theme.size.full}

  align-items: center
  justify-content: center

  borderRadius: ${props => props.theme.radii.md}px
`

export const Title = styled.Text`
  margin-bottom: ${props => props.theme.spacing.xl}px

  align-self: flex-start
  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => RFValue(props.theme.fontSize.lg)}px
  fontWeight: 700
`

export const Info = styled.View`
  margin-vertical: ${props => props.theme.spacing.xl}px
`

export const Text = styled.Text`
  color: ${props => props.theme.colors.gray9}
  fontSize: ${props => RFValue(props.theme.fontSize.md)}px
  fontWeight: 700
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

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#FAFAFA'
})`
  width: ${props => props.theme.size.full}
  height: 52px
  margin-top: ${props => props.theme.spacing.lg}px
  padding-left: ${props => props.theme.spacing.md}px

  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => RFValue(props.theme.fontSize.md)}px

  borderRadius: ${props => props.theme.radii.md}px
  background-color: ${props => props.theme.colors.gray9}
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

export const TextLink = styled.Text`
  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => RFValue(props.theme.fontSize.md)}px
`

export const LabelInput = styled.Text`
  alignSelf: flex-start
  margin-top: ${props => props.theme.spacing.xs}px
  margin-left: ${props => props.theme.spacing.xs}px

  color: ${props => props.theme.colors.yellow4}
  fontSize: ${props => RFValue(props.theme.fontSize.xs)}px
`
