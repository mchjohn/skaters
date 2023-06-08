import { Dimensions, Platform, StatusBar } from 'react-native'

// guideline height for standard 5" device screen is 680
export function RFValue(fontSize: number, standardScreenHeight = 680) {
  const { height, width } = Dimensions.get('screen')

  const standardLength = width > height ? width : height
  const baseOffset = width > height ? 0 : Platform.OS === 'ios'

  const offset = baseOffset ? 78 : (StatusBar.currentHeight ?? 0) // iPhone X style SafeAreaView size in portrait

  const deviceHeight = Platform.OS === 'android'
    ? standardLength - offset
    : standardLength

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight
  return Math.round(heightPercent)
}
