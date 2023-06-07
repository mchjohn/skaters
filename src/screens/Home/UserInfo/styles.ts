import styled from 'styled-components/native'

export const Text = styled.Text`
  margin-top: ${props => props.theme.spacing.xs}px
  margin-bottom: ${props => props.theme.spacing.sm}px

  color: ${props => props.theme.colors.yellow4}
  font-size: ${props => props.theme.fontSize.lg}px
`
