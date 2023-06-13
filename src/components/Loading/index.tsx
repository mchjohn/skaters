import { ActivityIndicator, FlexAlignType } from 'react-native'

import theme from '../../styles/theme'

type Props = {
  mx?: number
  my?: number
  size?: 'small' | 'large'
  self?: 'auto' | FlexAlignType
  color?: string // TODO: Melhorar
}

const defaultMargin = theme.spacing.sm

export function Loading({
  mx = defaultMargin,
  my = defaultMargin,
  size = 'small',
  self = 'flex-start',
  color = theme.colors.yellow4
}: Props) {
  return (
    <ActivityIndicator
      size={size}
      color={color}
      style={{
        alignSelf: self,
        marginHorizontal: mx,
        marginVertical: my
      }}
    />
  )
}
