import styled from 'styled-components/native'

type Props ={
  alignEnd?: boolean,
}

export const View = styled.View<Props>`
  width: ${props => props.theme.size.full}

  alignItems: center
  flexDirection: row
  justifyContent: ${props => props.alignEnd ? 'flex-end' : 'space-between'}
`

export const Inline = styled.View`
  align-items: center
  flexDirection: row
`
