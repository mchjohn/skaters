import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Theme from './src/styles/theme'

import Route from './src/routes'

import { SafeArea } from './src/components/SafeArea'

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaProvider>
        <SafeArea>
          <Route />
        </SafeArea>

        <StatusBar style="inverted" />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
