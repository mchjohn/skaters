import styled from 'styled-components/native'

import { Color, FontSize, Spacing } from '../../styles/theme'

type Props = {
  ml?: keyof Spacing
  mt?: keyof Spacing
  mb?: keyof Spacing
  my?: keyof Spacing
  size?: keyof FontSize
  color?: keyof Color
  weight?: string
}

export const TextBase = styled.Text<Props>`
  color: ${props => props.theme.colors.gray1}
  fontSize: ${props => props.theme.fontSize.md}px
`

export const Text = styled(TextBase)`
  ${props => props.ml && `margin-left: ${props.theme.spacing[props.ml]}px`}
  ${props => props.mt && `margin-top: ${props.theme.spacing[props.mt]}px`}
  ${props => props.mb && `margin-bottom: ${props.theme.spacing[props.mb]}px`}
  ${props => props.my && `margin-vertical: ${props.theme.spacing[props.my]}px`}
  ${props => props.size && `font-size: ${props.theme.fontSize[props.size]}px`}
  ${props => props.color && `color: ${props.theme.colors[props.color]}`}
  ${props => props.weight && `fontWeight: ${props.weight}`}
`
