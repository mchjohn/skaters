import styled from 'styled-components/native'

export const Button = styled.Pressable`
  flexDirection: row

  alignSelf: flex-end
  alignItems: center
  justifyContent: center
`

export const Text = styled.Text`
  color: ${props => props.theme.colors.gray1}
  margin-left: ${props => props.theme.spacing.sm}px
`
