import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function SafeArea({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets()

  return (
    <View
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
