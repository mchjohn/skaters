import { useTheme } from 'styled-components'
import Animated, {
  Easing,
  withTiming,
  interpolate,
  useSharedValue,
  useAnimatedProps,
} from 'react-native-reanimated'

import Svg, { Path } from 'react-native-svg'

import * as S from './styles'
import { Loading } from '../Loading'

type Props = {
  isLiked: boolean;
  isLoading?: boolean;
  onPress: () => void;
}

const AnimatedHeart = Animated.createAnimatedComponent(Svg)

export function LikeButton({ isLoading, isLiked, onPress }: Props) {
  const { colors } = useTheme()
  const svgHeightAnimated = useSharedValue(0)

  const svgProps = useAnimatedProps(() => {
    return {
      fill: 'none',
      width: 34,
      height: interpolate(svgHeightAnimated.value,
        [0, .5, 1],
        [30, 15, 30]
      ),
      viewBox: '0 0 34 30'
    }
  })

  function handlePress() {
    if (isLoading) return

    svgHeightAnimated.value = 0

    svgHeightAnimated.value = withTiming(1, {
      duration: 500,
      easing: Easing.ease
    })

    onPress()
  }

  return (
    <S.Button onPress={handlePress}>
      {isLoading ?
        <Loading self='center' /> :

        <AnimatedHeart animatedProps={svgProps}>
          <Path
            d={`
            M${17.9557} 27.6243
            L17.9493 27.6302
            C17.4217 28.1091 16.6046 28.1085 16.0774 27.6228
            L16.0774 27.6228
            L16.0678 27.6141
            L15.8808 27.4441
            L15.8773 27.4409
            C11.3746 23.3671 7.82331 20.1438 5.39896 17.1386
            C3.0038 14.1697 1.91766 11.6621 2.00489 9.04247
            C2.08569 6.76873 3.25687 4.59709 5.10812 3.33666
            L5.10921 3.33592
            C8.6276 0.937017 13.0483 2.00696 15.4789 4.8519
            L16.9995 6.63168
            L18.5201 4.8519
            C20.9549 2.0021 25.3734 0.925022 28.8856 3.33301
            L28.8909 3.33666
            C30.7427 4.59741 31.914 6.76984 31.9942 9.04421
            L31.9943 9.04578
            C32.0887 11.6624 31.0049 14.1684 28.6062 17.1433
            C26.1794 20.153 22.6249 23.3835 18.1223 27.4744
            C18.1211 27.4755 18.1199 27.4766 18.1187 27.4777
            L17.9557 27.6243
            L17.9557 27.6243Z
          `}
            strokeWidth="2"
            fill={isLiked ? colors.yellow4 : 'none'}
            stroke={isLiked ? colors.yellow4 : colors.gray1}
          />
        </AnimatedHeart>}

    </S.Button>
  )
}
