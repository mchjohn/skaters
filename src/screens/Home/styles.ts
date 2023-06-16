import styled from 'styled-components/native'

export const View = styled.View`
  flex: 1
  padding-bottom: ${props => props.theme.spacing.md}px
  padding-horizontal: ${props => props.theme.spacing.md}px
  background-color: ${props => props.theme.colors.gray9}
`

export const Separator = styled.View`
  height: 8px
`

export const Header = styled.View`
  width: 100%
  align-items: center
  flex-direction: row
  justify-content: space-between
`
