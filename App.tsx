import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TamaguiProvider, Theme } from 'tamagui'

import Route from './src/routes'

import config from './tamagui.config'

import { SafeArea } from './src/components/SafeArea'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) return null

  return (
    <TamaguiProvider config={config}>
      <Theme name='dark'>
        <SafeAreaProvider>
          <SafeArea>

            <Route />
          </SafeArea>

          <StatusBar style="inverted" />
        </SafeAreaProvider>

      </Theme>
    </TamaguiProvider>

  )
}
