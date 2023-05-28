import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { TamaguiProvider, Theme } from 'tamagui'

import Route from './src/routes'

import config from './tamagui.config'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }


  return (
    <TamaguiProvider config={config}>
      <Theme name='dark'>
        <Route />

        <StatusBar style="auto" />
      </Theme>
    </TamaguiProvider>

  )
}
