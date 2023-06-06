import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LayoutChangeEvent, View } from 'react-native'

type Props = {
  children: React.ReactNode
  onLayoutRootView: ((event: LayoutChangeEvent) => void) | undefined
}

export function SafeArea({ children, onLayoutRootView }: Props) {
  const insets = useSafeAreaInsets()

  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        flex: 1,
        backgroundColor: '#1A1A1A',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {children}
    </View>
  )
}
