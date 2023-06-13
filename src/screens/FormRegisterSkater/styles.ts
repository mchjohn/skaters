import styled from 'styled-components/native'

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

export const Header = styled.View`
  width: ${props => props.theme.size.full}
  margin-bottom: ${props => props.theme.spacing.md}px

  flexDirection: row
  justify-content: space-between
`

export const Title = styled.Text`
  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => props.theme.fontSize.sm}px

  max-width: 280px
`

export const Text = styled.Text`
  color: ${props => props.theme.colors.gray9}
  fontSize: ${props => props.theme.fontSize.md}px
  fontWeight: 700
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
  placeholderTextColor: '#FAFAFA'
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
