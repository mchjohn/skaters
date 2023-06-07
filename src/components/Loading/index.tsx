import { ActivityIndicator, FlexAlignType } from 'react-native'

import theme from '../../styles/theme'

type Props = {
  mx?: number
  my?: number
  size?: 'small' | 'large'
  self?: 'auto' | FlexAlignType
}

const defaultMargin = theme.spacing.sm

export function Loading({
  mx = defaultMargin,
  my = defaultMargin,
  size = 'small',
  self = 'flex-start'
}: Props) {
  return (
    <ActivityIndicator
      size={size}
      color={theme.colors.yellow4}
      style={{
        alignSelf: self,
        marginHorizontal: mx,
        marginVertical: my
      }}
    />
  )
}
